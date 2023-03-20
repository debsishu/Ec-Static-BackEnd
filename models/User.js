const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImageURL: { type: String, required: true },
  joinedClubs : [{type : String}],
});

const model = mongoose.model("UserSchema", UserSchema);
module.exports = model;
