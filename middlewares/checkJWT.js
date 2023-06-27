const jwt = require("jsonwebtoken");

const checkJWT = (req, res, next) => {
  console.log(req.headers);
  const authHeader = req.headers["authorization"];
  console.log("authHeader: ", authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log("token: ", token);
  if (token == null)
    return res.status(401).json({ success: false, msg: "No token received" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded: ", decoded);
    req.userId = decoded.id;
    req.isAdmin = decoded.isAdmin;
  } catch (err) {
    return res.status(403).json({ success: false, msg: "Invalid token" });
  }

  next();
};

module.exports = checkJWT;
