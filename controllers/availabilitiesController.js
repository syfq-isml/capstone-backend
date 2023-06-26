const BaseController = require("./baseController");

class AvailabilitiesController extends BaseController {
  constructor(model) {
    super(model);
  }

  // ------- For Admin view -------
  getAvailOfOneBand = async (req, res) => {
    const { bandId } = req.params;

    try {
      const bandAvail = await this.model.findOne({
        where: {
          bandId,
        },
      });

      return res.json(bandAvail);
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  // addAvailOfOneBand = async (req, res) => {
  //   const { bandId } = req.params;
  // };
}

module.exports = AvailabilitiesController;
