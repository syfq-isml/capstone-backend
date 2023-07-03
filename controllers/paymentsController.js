const BaseController = require("./baseController");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

class PaymentsController extends BaseController {
  constructor(model, { booking, bandBooking }) {
    super(model);
    this.bookingModel = booking;
    this.bandBookingModel = bandBooking;
  }

  createSession = async (req, res) => {
    const { bookingId } = req.params;
    // const band = await this.model.findByPk(bandId);
    // if (band == null)
    //   return res
    //     .status(400)
    //     .json({ success: false, msg: "Band does not exist!" });
    try {
      const booking = await this.bookingModel.findOne({
        where: {
          id: bookingId,
        },
        include: [
          {
            model: this.model,
            through: {
              where: {
                status: "Confirmed",
              },
            },
          },
        ],
      });

      const BAND_ID = booking.bands[0].id;
      const BAND_NAME = booking.bands[0].name;
      const BAND_IMG = booking.bands[0].photoUrl;
      const BAND_RATE = booking.bands[0].gigRate;
      const BOOKING_ID = booking.id;
      const BANDBOOKING_ID = booking.bands[0].bandBooking.id;

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "sgd",
              product_data: {
                name: BAND_NAME,
                images: [BAND_IMG],
              },

              unit_amount: BAND_RATE * 100,
            },
            quantity: 1,
          },
        ],
        metadata: {
          bandId: BAND_ID,
          bookingId: BOOKING_ID,
          bandBookingId: BANDBOOKING_ID,
        },
        mode: "payment",
        success_url: `${process.env.FRONTEND_URL}/payments/success`,
        cancel_url: `${process.env.FRONTEND_URL}/payments/error`,
      });
      res.json({ url: session.url });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ success: false, msg: err });
    }
  };

  setupWebhook = async (req, res) => {
    const payload = req.body;

    const sig = req.headers["stripe-signature"];
    console.log(sig);

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        payload,
        sig,
        process.env.STRIPE_EPSEC
      );
    } catch (err) {
      console.log(err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    //Handle the event
    if (event.type === "checkout.session.completed") {
      // Retrieve the session
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ["line_items"],
        }
      );

      const bookingId = sessionWithLineItems.metadata.bookingId;
      // const line_items = sessionWithLineItems.line_items.data[0].price;

      // const bookingId =
      //   sessionWithLineItems.line_items[0].price_data.product_data.metadata
      //     .bookingId;

      // console.log(bookingId);

      try {
        await this.bookingModel.update(
          {
            status: "Paid & Confirmed",
          },
          { where: { id: Number(bookingId) } }
        );
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, msg: err });
      }
    }
    // Return a 200 response to acknowledge receipt of the event
    res.status(200).end();
  };
}

module.exports = PaymentsController;
