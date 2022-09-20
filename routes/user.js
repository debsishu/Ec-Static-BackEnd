//Importing required npm packages

const express = require('express')

const axios = require('axios')

const app = express()


const userSchema = mongoose.Schema({
    Name:{
        type : String,
        require : true,
    },
    Username:{
        type : String,
        require :true,
        unique : true,
    },
    Email:{
        type : String,
        require : true,
        unique : true
    },
    Password:{
        type : String,
        require : true,
        minLength : 8
    },
})

const userModel = mongoose.model('userModel', userSchema)

const createUser = async() =>{
    const name_u = document.querySelector('name')
    const username = document.querySelector('userName')
    const email = document.querySelector('email')
    const pass = document.querySelector('pass')

    let user = {
      Name:name_u,
      Username:username,
      Email:email,
      Password:pass
    }
    let data = await userModel.create(user)
    console.log(data);
}


