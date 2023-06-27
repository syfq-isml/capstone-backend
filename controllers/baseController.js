class BaseController {
  constructor(model) {
    this.model = model;
  }

  getAll = async (req, res) => {
    try {
      const output = await this.model.findAll();

      return res.json(output);
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };
}

module.exports = BaseController;
