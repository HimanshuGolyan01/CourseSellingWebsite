const express = require("express")
const course = require("../models/course")
const purchase = require("../models/purchases")
const router = express.Router();
const jwt = require('jsonwebtoken');
const userMiddleware = require("../Middleware/user");




//to purchase course
router.get("/purchase" ,userMiddleware, async function(req , res) {
    const userId = req.userId;
    const courseId = req.body.courseId

     const purchased = await purchase.create({
        userId: userId,
        courseId: courseId,
     })
     

     res.status(200).json({message : "You successfully enrolled in the course"})
})


//to preview course

router.get("/preview" , async function( req , res) {
    const courses = await course.find({});

    res.json({
        courses 
    })
})


module.exports = router