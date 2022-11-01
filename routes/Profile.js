const express = require("express");
const User = require("../models/User");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const uID = req.body.userId;
    const response = await User.find({ _id: uID });
    console.log(response);
    if (response.length != 0)
      res.status(201).json({ message: "user-found", userinfo: response });
    else res.status(404).json({ message: "user-not-found" });
  } catch (e) {
    res.status(404).json({ message: "invliad-userid" });
    console.log(e);
  }
});

module.exports = route;
