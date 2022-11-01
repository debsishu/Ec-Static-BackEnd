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

route.use("/register", registerRoute);
route.use("/createpost", postsRoute);
route.use("/login", loginRoute);
route.use("/checktoken", checkToken);
route.use("/allposts", allPosts);
route.use("/profile", Profile);

module.exports = route;
