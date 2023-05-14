const express = require("express");
const route = express.Router();
const verifyToken = require("../middleware/VerifyToken");
const User = require("../models/User");

route.post("/", verifyToken, async(req,res)=>{
     const {username, uname, imageURL} = req.body;
    try {
        if(uname){
            const result = await User.updateOne({username : username}, {name : uname});
            console.log(result);
            res.status(200).json({message : "name-updated"});
        }
        else if(imageURL){
            const result = await User.updateOne({username : username}, {profileImageURL : imageURL});
            console.log(result);
            res.status(200).json({message : "image-updated"});
        }
        else{
            res.status(501).json({message : "not-allowed"});
        }
    } catch (error) {
        
    }
     
});

module.exports = route;