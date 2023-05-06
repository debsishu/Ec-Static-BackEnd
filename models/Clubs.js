const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  ClubName: { type: String, required: true },
  ClubTag: { type: String, required: true, unique: true },
  UserCount: { type: Number, required: true },
  ClubDescription: { type: String, required: true },
  DateOfCreation: { type: Date, required: true },
  ClubImage: { type: String, required: false },
  ClubBanner: { type: String, required: false },
});

const model = mongoose.model("ClubSchema", ClubSchema);
module.exports = model;
