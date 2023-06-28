const jwt = require("jsonwebtoken");

const checkJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res.status(401).json({ success: false, msg: "No token received" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
  } catch (err) {
    return res.status(403).json({ success: false, msg: "Invalid token" });
  }

  next();
};

module.exports = checkJWT;
