const express = require("express");
const route = express.Router();
const verifyToken = require("../middleware/VerifyToken");
const Posts = require("../models/Posts");

route.post("/clubposts", verifyToken, async(req,res)=>{
    const clubId = req.params.clubID;

    try{
        const clubPosts = await Posts.find({"clubID" : clubId});
        console.log("Fetching club posts");
        res.status(200).json({ post: clubPosts });
    }catch(err){
        console.log(err);
        res.status(404).json({message : "club-not-found"})
    }
});

module.exports = route;


