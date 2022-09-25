const jwt = require("jsonwebtoken");
const JWTSECRET = process.env.JWTSECRET;

const verifyToken = (req, res, next) => {
  const token = req.body.token;

  if (!token) return res.status(400).json({ error: "User not authenticated" });

  try {
    const validateToken = jwt.verify(token, JWTSECRET);
    if (!validateToken) res.status(400).json({ error: "Token Not Verified" });
    req.isAuthenticated = true;
    return next();
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

module.exports = verifyToken;
