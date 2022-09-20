const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true},
  postID : {type:String, required : true, unique : true},
  postContent : {type : String, required : true},
});

const model = mongoose.model("PostSchema", PostSchema);
module.exports = model;