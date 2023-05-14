const express = require("express");
const route = express.Router();
const Posts = require("../models/Posts");

route.get("/", async (req, res) => {
  const { searchQuery } = req.body;
  try {
    const matchedPost = await Posts.find({ postTitle : { '$regex' : searchQuery, '$options' : 'i' } });
    
    if (matchedPost && matchedPost.length > 0) {
      res.status(302).json(matchedPost);
    } else {
      res.status(404).json({ "message" : "no-post-found" });
    }
  } catch (error) {
    res.status(404).json({"message" : "no-post-found" });
    console.log(error);
  }
});

module.exports = route;
