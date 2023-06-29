const BaseController = require("./baseController");

class AvailabilitiesController extends BaseController {
  constructor(model, { band }) {
    super(model);
    this.bandModel = band;
  }

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
