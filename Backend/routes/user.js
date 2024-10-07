const express = require("express")
const zod = require("zod")
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken');
const User = require("../models/user")

const router = express.Router();

const signupBody = zod.object({
    name: zod.string().min(1).max(50),
    email: zod.string().email(),
    password : zod.string().min(6)
})

router.post("/signup", async function(req , res) {
    const {success} = signupBody.safeParse(req.body)

    if(!success) {
        res.status(400).json({
            message : "inavlid request"
        })
    }

    const Userexist = await User.findOne({email : req.body.email})

    if(Userexist) {
        res.status(400).json({
            error : "User already Exist"
        })
    }

    const user = await User.create({
        email : req.body.email,
        name : req.body.name,
        password : req.body.password
    })

    const userID = user._id;

    const token = jwt.sign({
        userID
    }, process.env.SECRET_KEY)

    res.status(200).json({
        message : "User Created Successfully",
        token : token,
        user : user.name
    })
})

module.exports = router