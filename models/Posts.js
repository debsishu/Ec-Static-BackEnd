const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  username: { type: String, required: true },
  postContent: { type: String, required: true },
  date: { type: String, required: true },
  clubID: { type: String, require: true },
});

const model = mongoose.model("PostSchema", PostSchema);
module.exports = model;
