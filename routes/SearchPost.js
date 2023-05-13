const express = require("express");
const route = express.Router();
const Posts = require("../models/Posts");
const User = require("../models/User");
const Club = require("../models/Clubs");

route.post("/", async (req, res) => {
  const { searchText } = req.body;

  const matchedPost = Posts.find({ postTitle: searchText });
  const matchedUser = User.find({ username: searchText });
  const matchedClub = Club.find({ ClubName: searchText });

  res.json({ Posts: matchedPost, Users: matchedUser, Clubs: matchedClub });
});

module.exports = route;
