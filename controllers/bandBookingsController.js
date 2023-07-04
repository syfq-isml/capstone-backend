const { Op } = require("sequelize");
const BaseController = require("./baseController");

class BandBookingsController extends BaseController {
  constructor(model, { booking, band, availability }) {
    super(model);
    this.bookingModel = booking;
    this.bandModel = band;
    this.availModel = availability;
  }

  // Admin access only
  updateBandStatus = async (req, res) => {
    const { bookingId } = req.params;
    const {
      bandBooking1Id,
      band1Status,
      bandBooking2Id,
      band2Status,
      bandBooking3Id,
      band3Status,
    } = req.body;

    if (req.isAdmin !== true)
      return res
        .status(403)
        .json({ success: false, msg: "You are not an admin!" });

    const arr = [
      { id: bandBooking1Id, status: band1Status },
      { id: bandBooking2Id, status: band2Status },
      { id: bandBooking3Id, status: band3Status },
    ];

    let confirmedCount = 0;
    arr.forEach((item) =>
      item.status === "Confirmed" ? confirmedCount++ : null
    );
    if (confirmedCount > 1)
      return res.status(400).json({
        success: false,
        msg: `More than 1 "Confirmed" status received!`,
      });

    try {
      await Promise.all(
        arr.map(async (bandbooking, index) => {
          console.log(bandbooking.id);
          console.log(bandbooking.status);
          // const bandBooking = await this.model.findByPk(bandbooking.id);
          await this.model.update(
            { status: bandbooking.status },
            {
              where: {
                id: bandbooking.id,
              },
            }
          );
        })
      );

      // const arr2 = arr.map((item) => item.id);

      // const bandBookings = await this.model.findAll({
      //   where: {
      //     id: {
      //       [Op.in]: arr2,
      //     },
      //   },
      // });

      if (confirmedCount > 0) {
        await this.bookingModel.update(
          {
            status: "Awaiting Payment",
          },
          { where: { id: bookingId } }
        );

        const booking = await this.bookingModel.findOne({
          where: {
            id: bookingId,
          },
          include: [
            {
              model: this.bandModel,
              through: {
                where: {
                  status: "Confirmed",
                },
              },
            },
          ],
        });

        await this.availModel.create({
          bandId: booking.bands[0].id,
          startBlockedTiming: booking.startDateTime,
          endBlockedTiming: booking.endDateTime,
        });
      }

      const booking = await this.bookingModel.findOne({
        where: {
          id: bookingId,
        },
        include: [{ model: this.bandModel }],
      });

      return res.json({ success: true, booking });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ success: false, msg: err });
    }
  };
}

module.exports = BandBookingsController;
