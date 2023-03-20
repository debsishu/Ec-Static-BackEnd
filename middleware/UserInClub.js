const User = require("../models/User");

const UserInClub = async(req, res, next) =>{
    const {userId, clubName} = req.body;
    try{
        const ans = await User.findOne({_id : userId}, { joinedClubs: clubName})
        if(ans){
            res.status(200).json({message : "user-already-in-club"});
        }else{
            res.status(404).json({message : "user-not-in-club"});
            return next();
        }
    }
    catch(err){
        res.status(400).json({message : err});
    }
}

module.exports = UserInClub;