const express = require("express");
const bcrypt = require("bcryptjs");
const route = express.Router();
const jwt = require("jsonwebtoken");
const passwordValidator = require("password-validator");
const User = require("../models/User");
const JWTSECRET = process.env.JWTSECRET;

// Create a schema
var schema = new passwordValidator();

// Add properties to it
schema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(1) // Must have at least 2 digits
  .has()
  .not()
  .spaces();

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

route.post("/", async (req, res) => {
  const { name, email, username, password: plainTextPassword } = req.body;
  try {
    if (!name || !email || !username || !plainTextPassword) {
      res.status(421).json({
        status: "missing-information",
        message: "Please fill all the information",
      });
      return;
    }
    if (!validateEmail(email)) {
      res.status(501).json({
        status: "invalid-email",
        message: "Please enter a valid email address",
      });
      return;
    }

    if (!schema.validate(plainTextPassword)) {
      res.status(501).json({
        status: "weak-password",
        message: "Please enter a strong password",
      });
      return;
    }

    const password = await bcrypt.hash(plainTextPassword, 10);
    const dbusername = await User.findOne({ username: username });
    const dbemail = await User.findOne({ email: email });

    if (dbusername && dbemail) {
      res.status(409).json({
        status: "username-email-taken",
        message: "Username and Email is already taken",
      });
    } else if (dbusername) {
      res.status(409).json({
        status: "username-taken",
        message: "Username already taken",
      });
    } else if (dbemail) {
      res.status(409).json({
        status: "email-taken",
        message: "Email is already taken",
      });
    } else {
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
    }
  } catch (error) {
    res.json(error).status(400);
  }
});
module.exports = route;
