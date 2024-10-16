const express = require("express")
const zod = require("zod")
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken');
const Purchases = require("../models/purchases")
const User = require("../models/user")
const userMiddleware = require("../Middleware/user")
const Course = require("../models/course")

const router = express.Router();

const signupBody = zod.object({
    name: zod.string().min(1).max(50),
    email: zod.string().email(),
    password : zod.string().min(6)
})

router.post("/signupuser", async function(req , res) {
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

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, process.env.SECRET_KEY)

    res.status(200).json({
        message : "User Created Successfully",
        token : token,
        user : user.name
    })
})

const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
  })

router.post("/signinuser" , async function(req , res){
    const {success} = signinBody.safeParse(req.body)

    if(!success) {
        res.status(411).json({error : "Invalid Inputs"})
    }

    const userExist = await User.findOne({
        email : req.body.email,
    })
    if(!userExist) {
        res.status(411).json({error : "user not exist"})
    }

    const userId = userExist.id;
    const token = jwt.sign({userId},
        process.env.SECRET_KEY ,
    )
    res.status(200).json({msg :"User signed in successfully",token:token})
 })




 router.get("/purchases", userMiddleware, async function(req, res) {
    const userId = req.userId; 

   
    const purchased = await Purchases.find({
        userId,
    });

    let purchasedCourseIds = [];

    
    for (let i = 0; i < purchased.length; i++) { 
        purchasedCourseIds.push(purchased[i].courseId); 
    }

   
    const coursesData = await Course.find({
        _id: { $in: purchasedCourseIds } 
    });

    
    res.json({
        purchased,  
        coursesData    
    });
});

module.exports = router