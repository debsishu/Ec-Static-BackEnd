const express = require("express");
const route = express.Router();
const Posts = require("../models/Posts");
const verifyToken = require("../middleware/VerifyToken");
const ObjectId = require("mongodb").ObjectId;

route.post("/", verifyToken, async (req, res) => {
  try {
    const { postID } = req.body;
    var objectId = new ObjectId(postID);
    const fetchedPost = await Posts.findOne({ _id: objectId });
    if (fetchedPost) {
      res.status(200).json(fetchedPost);
    } else {
      res.status(404).json({ message: "post-not-found" });
    }
  } catch (err) {
    res.status(404).json({"message" : "no-post-found" });
    console.log(err);
  }
});

module.exports = route;
