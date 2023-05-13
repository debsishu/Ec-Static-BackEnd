const express = require("express");
const route = express.Router();
const Posts = require("../models/Posts");
const verifyToken = require("../middleware/VerifyToken");

route.post("/", verifyToken, async (req, res) => {
  const { userID, username, postTitle, postContent, clubID, imageURL } =
    req.body;
  console.log(req.body);
  try {
    if (imageURL) {
      const response = await Posts.create({
        userID,
        username,
        postTitle,
        postContent,
        date: new Date().toLocaleDateString("en-GB"),
        likeCount: new Array(),
        clubID,
        imageURL,
      });
      res.json({ status: "ok" });
      console.log("Post created successfully : ", response);
    } else {
      const response = await Posts.create({
        userID,
        username,
        postTitle,
        postContent,
        date: new Date().toLocaleDateString("en-GB"),
        likeCount: new Array(),
        clubID,
      });
      res.json({ status: "ok" });
      console.log("Post created successfully : ", response);
    }
  } catch (e) {
    res.status(404).json({ status: "You really fucked up" });
  }
});

module.exports = route;
