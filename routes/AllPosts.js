const express = require("express");
const Post = require("../models/Posts");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const allPosts = await Post.find();
    console.log("Fetching posts");
    res.status(200).json({ post: allPosts });
  } catch (e) {
    console.log(e);
  }
});

module.exports = route;
