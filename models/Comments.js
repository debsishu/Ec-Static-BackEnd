const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  postID: { type: String, required: true },
  commentContent: { type: String, required: true },
  date: { type: String, required: true },
});

const model = mongoose.model("CommentSchema", CommentSchema);
module.exports = model;
