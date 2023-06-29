const BaseController = require("./baseController");

class BookingsController extends BaseController {
  constructor(model, { bandBooking, band, user }) {
    super(model);
    this.bandBookingModel = bandBooking;
    this.bandModel = band;
    this.userModel = user;
  }

  getAllBookings = async (req, res) => {
    if (req.isAdmin !== true)
      return res
        .status(403)
        .json({ success: false, msg: "You are not an admin!" });

    try {
      // console.log(this.model);
      const bookings = await this.model.findAll({
        include: [
          { model: this.bandModel },
          {
            model: this.userModel,
            as: "client",
            attributes: ["id", "name", "email", "phoneNumber"],
          },
        ],
      });

      return res.json(bookings);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ success: false, msg: err });
    }
  };

  getBookingsOfOneUser = async (req, res) => {
    const { userId } = req.params;

    if (req.isAdmin === false && !(+req.userId === +userId))
      return res
        .status(403)
        .json({ success: false, msg: "You are not the guy" });
    try {
      // console.log(this.model);
      const bookings = await this.model.findAll({
        where: { clientId: req.userId },
        include: [{ model: this.bandModel }],
      });

      console.log(bookings.id);

      return res.json(bookings);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ success: false, msg: err });
    }
  };
}

module.exports = BookingsController;
