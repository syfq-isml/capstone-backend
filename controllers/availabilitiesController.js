const BaseController = require("./baseController");
const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");
const isBefore = require("date-fns/isBefore");

class AvailabilitiesController extends BaseController {
  constructor(model, { band, genre }) {
    super(model);
    this.bandModel = band;
    this.genreModel = genre;
  }
  // For Client
  getAvailableBands = async (req, res) => {
    const { genreId } = req.params;
    const { startDateTime, endDateTime } = req.body;

    if (isBefore(new Date(endDateTime), new Date(startDateTime)))
      return res
        .status(400)
        .json({ success: false, msg: "End date is before start date!" });

    // get bands of a given genre
    // get blocked timings of those bands
    // check if overlapping
    // true -> means not available, dont add to array
    // false -> means available, add to array
    // return the array

    try {
      const genre = await this.genreModel.findOne({
        where: {
          id: genreId,
        },
      });

      if (genre == null)
        return res
          .status(400)
          .json({ success: false, msg: "Genre does not exist!" });

      const bands = await this.bandModel.findAll({
        attributes: ["id", "name", "photoUrl"],
        include: [
          {
            model: this.genreModel,
            where: {
              id: genreId,
            },
            attributes: [],
          },
        ],
      });

      if (bands.length === 0) return res.json([]);

      const availableBands = [];

      await Promise.all(
        bands.map(async (band) => {
          const blockedTimings = await this.model.findAll({
            where: {
              bandId: band.id,
            },
          });

          let isAvailable = true;

          blockedTimings.map((timing) => {
            if (
              areIntervalsOverlapping(
                {
                  start: new Date(timing.startBlockedTiming),
                  end: new Date(timing.endBlockedTiming),
                },
                { start: new Date(startDateTime), end: new Date(endDateTime) },
                { inclusive: true }
              )
            )
              isAvailable = false;
          });

          if (isAvailable === true) availableBands.push(band);
        })
      );

      return res.json(availableBands);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ success: false, msg: err });
    }
  };

  // ------- For Admin view -------
  getAvailOfOneBand = async (req, res) => {
    const { bandId } = req.params;

    try {
      const bandAvail = await this.model.findAll({
        where: {
          bandId,
        },
        include: this.bandModel,
      });

      return res.json(bandAvail);
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  addAvailOfOneBand = async (req, res) => {
    const { bandId } = req.params;
    const { startBlockedTiming, endBlockedTiming } = req.body;

    if (req.isAdmin !== true)
      return res
        .status(403)
        .json({ success: false, msg: "You are not an admin!" });

    try {
      const band = await this.bandModel.findOne({ where: { id: bandId } });
      if (band == null)
        return res.json({ success: false, msg: "Band does not exist!" });

      const newAvail = await this.model.create({
        bandId,
        startBlockedTiming,
        endBlockedTiming,
      });

      return res.json(newAvail);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ success: false, msg: err });
    }
  };

  deleteOneAvailOfOneBand = async (req, res) => {
    const { availId, bandId } = req.params;

    if (req.isAdmin !== true)
      return res
        .status(403)
        .json({ success: false, msg: "You are not an admin!" });

    try {
      const band = await this.bandModel.findOne({ where: { id: bandId } });
      if (band == null)
        return res
          .status(400)
          .json({ success: false, msg: "Band does not exist!" });

      const avail = await this.model.findOne({ where: { id: availId } });
      if (avail == null)
        return res
          .status(400)
          .json({ success: false, msg: "Invalid availability id!" });

      await this.model.destroy({
        where: {
          id: availId,
        },
      });

      return res.json({ success: true, msg: "Deleted entry from db!" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ success: false, msg: err });
    }
  };
}

module.exports = AvailabilitiesController;
