const BaseController = require("./baseController");

class BandsController extends BaseController {
  constructor(model, { Genre }) {
    super(model);
    this.genreModel = Genre;
  }

  getAllWithGenres = async (req, res) => {
    try {
      const bandsWithGenres = await this.model.findAll({
        include: this.genreModel,
      });
      return res.json(bandsWithGenres);
    } catch (err) {
      return res.status(500).json({ success: false, msg: err });
    }
  };

  getOneWithGenres = async (req, res) => {
    const { bandId } = req.params;

    try {
      const bandWithGenres = await this.model.findOne({
        where: {
          id: bandId,
        },
        include: this.genreModel,
      });
      return res.json(bandWithGenres);
    } catch (err) {
      return res.status(500).json({ success: false, msg: err });
    }
  };
}

module.exports = BandsController;
