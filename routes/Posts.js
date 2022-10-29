const express = require("express");
const route = express.Router();
const Posts = require("../models/Posts");
const verifyToken = require("../middleware/VerifyToken");
route.post("/", verifyToken, async (req, res) => {
  const { userID, username, postContent, isAuthenticated, clubID, imageURL } =
    req.body;
  console.log(req.body);
  if (isAuthenticated && imageURL) {
    const response = await Posts.create({
      userID,
      username,
      postContent,
      date: new Date().toLocaleDateString("en-GB"),
      clubID,
      imageURL,
    });
    res.json({ status: "ok" });
    console.log("Post created successfully : ", response);
  } else if (isAuthenticated) {
    const response = await Posts.create({
      userID,
      username,
      postContent,
      date: new Date().toLocaleDateString("en-GB"),
      clubID,
    });
    res.json({ status: "ok" });
    console.log("Post created successfully : ", response);
  } else {
    res.status(401).json({ status: "unauthorized" });
  }
});

module.exports = route;
