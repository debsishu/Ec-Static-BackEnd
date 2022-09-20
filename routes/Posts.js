const express = require('express');
const route = express.Router();
const Posts = require('../models/PostsStructure')

route.post("/posts", async (req, res) => {
    const {username, postID, postContent} = req.body

    try{
        const response = await Posts.create({
            username,
            postID,
            postContent,
        });
    }catch(error){
        res.json(error);
    }
    res.json({status : 'ok'});
});

module.exports = route;




