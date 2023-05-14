const express = require("express");
const route = express.Router();
const verifyToken = require("../middleware/VerifyToken");
const User = require("../models/User");

route.get("/", verifyToken, async (req, res) => {
  const { userinfo } = req.body;
  try {
    const result = await User.findOne({ username: userinfo });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "user-not-found" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "user-not-found" });
  }
});

module.exports = route;