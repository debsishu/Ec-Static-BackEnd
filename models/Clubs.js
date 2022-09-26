const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userCount: { type: Number, require: true },
});

const model = mongoose.model("ClubSchema", ClubSchema);
module.exports = model;
