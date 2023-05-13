const express = require("express");
const route = express.Router();
const Posts = require("../models/Posts");
const verifyToken = require("../middleware/VerifyToken");
const ObjectId = require("mongodb").ObjectId;

route.post("/", verifyToken, async (req, res) => {
  const { id, username } = req.body;
  var objectId = new ObjectId(id);
  try {
    const postExist = await Posts.findOne({ _id: objectId });
    console.log(postExist);

    if (postExist) {
      const log = await Posts.updateOne(
        { _id: objectId },
        { $push: { likeCount: username } }
      );
      console.log(log);
      res.json({ message: "liked" }).status(200);
    } else {
      res.status(404).json("Not found nigga");
    }
  } catch (err) {
    res.json({ message: "action-not-allowed" }).status(401);
  }
});

module.exports = route;
