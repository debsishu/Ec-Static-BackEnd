const express = require("express");
const route = express.Router();
const verifyToken = require("../middleware/VerifyToken");
const Clubs = require("../models/Clubs");

route.get("/", verifyToken, async (req, res) => {
  const clubID = req.query.clubID;
  try {
    const clubInformation = await Clubs.findOne({ ClubTag: clubID });
    if (!clubInformation) {
      res.status(404).json({ message: "club-not-found" });
    } else {
      res.status(200).json(clubInformation);
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ err });
  }
});

module.exports = route;
