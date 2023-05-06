const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();

const dbLink = process.env.DBLINK;

mongoose
  .connect(process.env.DBLINK)
  .then((db) => console.log("Database connection successful"))
  .catch((err) => console.log(err));

const registerRoute = require("./routes/Register");
const postsRoute = require("./routes/Posts");
const loginRoute = require("./routes/Login");
const checkToken = require("./routes/CheckToken");
const allPosts = require("./routes/AllPosts");
const Profile = require("./routes/Profile");
const clubPosts = require("./routes/ClubPosts");
const createClub = require("./routes/CreateClub");
const joinClub = require("./routes/JoinClub");
const clubDetails = require("./routes/ClubDetails");

route.use("/register", registerRoute);
route.use("/createpost", postsRoute);
route.use("/login", loginRoute);
route.use("/checktoken", checkToken);
route.use("/allposts", allPosts);
route.use("/profile", Profile);
route.use("/clubposts", clubPosts);
route.use("/createclub", createClub);
route.use("/joinclub", joinClub);
route.use("/clubdetails", clubDetails);

module.exports = route;
