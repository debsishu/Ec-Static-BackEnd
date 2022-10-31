const express = require("express");
const User = require("../models/User");
const route = express.Router();

route.get("/", async (req, res) => {
  const uID = req.body.userId;
  const response = await User.find({ _id: uID });
  if (response != null)
    res.json({ message: "user-found", userinfo: response }).status(201);
  else res.json({ message: "user-not-found" }).status(404);
});

module.exports = route;
