const jwt = require("jsonwebtoken");

const checkJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.sendStatus(403).json({ success: false, msg: "Invalid token" });
  }

  next();
};

module.exports = checkJWT;
