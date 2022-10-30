const jwt = require("jsonwebtoken");
const JWTSECRET = process.env.JWTSECRET;
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.body.token;
    if (!token) return res.status(400).json({ error: "No token found" });

    const payload = jwt.verify(token, JWTSECRET);
    const user = await User.findById(payload.id);
    if (!user) res.status(400).json({ error: "User not verified" });
    // res.json({ id: user._id, username: user.username, isAuthenticated: true });
    req.body.userID = user._id.toString();
    req.body.username = user.username;
    req.body.name = user.name;
    req.body.isAuthenticated = true;
    return next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = verifyToken;
