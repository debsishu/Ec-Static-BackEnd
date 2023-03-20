const express = require('express')
const route = express.Router();
const Clubs = require('../models/Clubs');
const User = require("../models/User");

route.post("/", async(req, res)=>{
    const{username, Cname} = req.body;
    console.log(typeof(username));
    console.log(Cname);
    let userCount = 1;
    try{
        const response = await Clubs.create({
            Cname,
            userCount});

        const uinf = await User.updateOne({username : username}, {$push: {joinedClubs: clubName}});
        console.log();
            res.status(200).json({message : "club-created-successfully", response : uinf})
    }
    catch(err){
        res.status(400).json({message : err})
    }
});

module.exports = route;
