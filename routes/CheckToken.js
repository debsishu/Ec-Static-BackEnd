const express = require("express");
const route = express.Router();
const jwt = require("jsonwebtoken");
const JWTSECRET = process.env.JWTSECRET;
const User = require("../models/User");

route.post("/", async (req, res) => {
  const token = req.body.token;
  if (!token) return res.status(400).json({ error: "No token found" });

  const payload = jwt.verify(token, JWTSECRET);
  const user = await User.findById(payload.id);
  if (!user) res.status(400).json({ error: "User not verified" });
  req.isAuthenticated = true;
  res.json({
    id: user._id,
    name: user.name,
    username: user.username,
    isAuthenticated: true,
  });
});

module.exports = route;
