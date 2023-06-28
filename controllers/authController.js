const BaseController = require("./baseController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController extends BaseController {
  constructor(model) {
    super(model);
  }

  registerUser = async (req, res) => {
    const { email, password, name, phoneNumber } = req.body;

    if (email == null || password == null) {
      return res
        .status(401)
        .json({ success: false, msg: "Missing Email/Password" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await this.model.create({
        email,
        password: hashedPassword,
        name,
        phoneNumber,
      });

      const payload = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
        isAdmin: newUser.isAdmin,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.json({
        success: true,
        token,
        id: newUser.id,
        name: newUser.name,
        isAdmin: false,
      });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  registerAdminUser = async (req, res) => {
    const { email, password, name, phoneNumber } = req.body;

    if (email == null || password == null) {
      return res
        .status(401)
        .json({ success: false, msg: "Missing Email/Password" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await this.model.create({
        email,
        password: hashedPassword,
        name,
        phoneNumber,
        isAdmin: true,
      });

      const payload = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
        isAdmin: newUser.isAdmin,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.json({
        success: true,
        token,
        id: newUser.id,
        name: newUser.name,
        isAdmin: true,
      });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (email == null || password == null) {
      return res
        .status(401)
        .json({ success: false, msg: "Missing Email/Password" });
    }

    try {
      const user = await this.model.findOne({ where: { email } });

      if (user == null) {
        return res
          .status(404)
          .json({ success: false, msg: "User does not exist" });
      }

      const result = await bcrypt.compare(password, user.password);
      if (result === false) {
        return res
          .status(403)
          .json({ success: false, msg: "Password does not match" });
      }

      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        isAdmin: user.isAdmin,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.json({
        success: true,
        token,
        id: user.id,
        name: user.name,
        isAdmin: user.isAdmin,
      });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  validateToken = async (req, res) => {
    return res.json({ success: true, msg: "Valid Token" });
  };
}

module.exports = AuthController;
