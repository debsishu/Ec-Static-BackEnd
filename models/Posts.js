const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  username: { type: String, required: true },
  postTitle: { type: String, required: true },
  postContent: { type: String, required: true },
  date: { type: String, required: true },
  clubID: { type: String, required: true },
  likeCount: { type: Number, required: true },
  imageURL: { type: String, required: false },
});

const model = mongoose.model("PostSchema", PostSchema);
module.exports = model;
