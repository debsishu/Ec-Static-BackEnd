const express = require("express");
const Post = require("../models/Posts");

const route = express.Router();

route.get("/", async (req, res) => {
  const allPosts = await Post.find();
  console.log("Fetching posts");
  res.json({ post: allPosts }).status(200);
});

module.exports = route;
