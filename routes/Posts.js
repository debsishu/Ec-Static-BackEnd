const express = require("express");
const route = express.Router();
const Posts = require("../models/Posts");

route.post("/", async (req, res) => {
  const { username, postContent } = req.body;

  try {
    const response = await Posts.create({
      username,
      postContent,
      date: new Date().toLocaleDateString("en-GB"),
    });
    console.log("Post created successfully : ", response);
  } catch (error) {
    res.json(error);
  }
  res.json({ status: "ok" });
});

module.exports = route;
