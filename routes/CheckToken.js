const express = require("express");
const route = express.Router();
const verifyToken = require("../middleware/VerifyToken");

route.post("/", verifyToken, async (req, res) => {
  res.status(200).json({
    isAuthenticated: req.isAuthenticated,
    message: "user auth successful",
  });
});

module.exports = route;
