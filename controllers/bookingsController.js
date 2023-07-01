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

  getOneBooking = async (req, res) => {
    const { bookingId } = req.params;

    try {
      const booking = await this.model.findOne({
        where: {
          id: bookingId,
        },
        include: [{ model: this.bandModel }],
      });

      return res.json(booking);
    } catch (err) {
      console.log(err);
      return res.json({ success: false, msg: err });
    }
  };

  makeABooking = async (req, res) => {
    const { userId, genreId } = req.params;
    const {
      startDateTime,
      endDateTime,
      venue,
      eventName,
      isContactMe,
      band1Id,
      band1Rank,
      band2Id,
      band2Rank,
      band3Id,
      band3Rank,
    } = req.body;

    // checks for not null - venue, eventName, isContactMe
    if (venue == null || eventName == null || isContactMe == null)
      return res.status(400).json({
        success: false,
        msg: "venue, eventName or isContactMe cannot be null!",
      });

    const bandIdsArray = [
      { id: band1Id, rank: band1Rank },
      { id: band2Id, rank: band2Rank },
      { id: band3Id, rank: band3Rank },
    ];

    // checks for existence of bands
    // await Promise.all(
    //   bandIdsArray.map(async (band) => {
    //     const result = await this.bandModel.findByPk(band.id);
    //     console.log(result);
    //     if (result == null)
    //       return res
    //         .status(404)
    //         .json({ success: false, msg: "Band does not exist!" });
    //   })
    // );

    // post to bookings
    // post to band_bookings

    try {
      const newBooking = await this.model.create({
        startDateTime,
        endDateTime,
        venue,
        eventName,
        genreId,
        clientId: userId,
        isContactMe,
        status: "Pending",
      });

      await Promise.all(
        bandIdsArray.map(async (band) => {
          await this.bandBookingModel.create({
            bandId: band.id,
            bookingId: newBooking.id,
            status: "Not Contacted",
            rank: band.rank,
          });
        })
      );

      return res.json({ success: true, newBooking });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ success: false, msg: err });
    }
  };
}

module.exports = BookingsController;
