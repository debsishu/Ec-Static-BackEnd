const express = require("express");
const route = express.Router();
const Comments = require("../models/Comments");
const verifyToken = require("../middleware/VerifyToken");

route.post("/", verifyToken, async (req, res) => {
  const { username, postID, commentContent } = req.body;
  try {
    const response = await Comments.create({
      username,
      postID,
      commentContent,
      date: new Date().toLocaleDateString("en-GB"),
    });
    res.status(201).json(response);
  } catch (err) {
    res.status(404).json({"message" : "no-post-found" });
    console.log(err);
  }
});

module.exports = route;
