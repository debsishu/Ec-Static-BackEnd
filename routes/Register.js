const express = require("express");
const bcrypt = require("bcryptjs");
const route = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWTSECRET = process.env.JWTSECRET;

route.post("/", async (req, res) => {
  const { name, email, username, password: plainTextPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      name,
      email,
      username,
      password,
      profileImageURL:
        "https://img.myloview.com/stickers/default-avatar-profile-in-trendy-style-for-social-media-user-icon-400-228654852.jpg",
    });
    const token = jwt.sign(
      { username: response.username, id: response._id },
      JWTSECRET
    );
    return res
      .json({
        id: response._id,
        name: response.name,
        username: response.username,
        profileImageURL: response.profileImageURL,
        token: token,
      })
      .status(201);
  } catch (error) {
    res.json(error).status(400);
  }
});
module.exports = route;
