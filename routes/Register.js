const express = require("express");
const bcrypt = require("bcryptjs");
const route = express.Router();
const User = require("../models/User");

route.post("/register", async (req, res) => {
  const { name, email, username, password: plainTextPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      name,
      email,
      username,
      password,
    });
    console.log("User Created Successfully : ", response);
  } catch (error) {
    res.json(error);
  }
  res.json({ status: "ok" });
});
module.exports = route;

