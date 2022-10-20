const express = require("express");
const bcrypt = require("bcryptjs");
const route = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWTSECRET = process.env.JWTSECRET;

route.post("/", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).lean();
  if (!user) {
    return res.json({
      status: "error",
      message: "username or password is invalid",
    });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      { username: user.username, id: user._id },
      JWTSECRET
    );
    return res.json({
      id: user._id,
      name: user.name,
      username: user.username,
      token: token,
    });
  } else {
    res
      .sendStatus(401)
      .json({ status: "error", message: "username or password is invalid" });
  }
});

module.exports = route;
