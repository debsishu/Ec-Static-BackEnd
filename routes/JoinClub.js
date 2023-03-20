const express = require('express');
const route = express.Router();
const Club = require('../models/Clubs');
const User = require('../models/User');
// const UserInClub = require("../middleware/UserInClub");

route.post("/", async(req,res)=>{
    const{userid, Cname} = req.body;
    try{
        const result = await Club.updateOne({Cname : Cname}, {$inc: { userCount: 1,}});
        const anotherRes = await User.updateOne({_id: userid}, {$push : {joinedClub : Cname}});
            res.status(200).json({message : "successfully-joined-club"});
    }catch(err){
        res.status(404).json({message : err});
    }
})


module.exports = route;