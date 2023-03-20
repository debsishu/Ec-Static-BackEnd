const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  Cname: { type: String, required: true },
  userCount: { type: Number, required: true },
});

const model = mongoose.model("ClubSchema", ClubSchema);
module.exports = model;
