const express = require("express");
const router = express.Router();
const Course = require("../models/course");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");  
const adminMiddleware = require("../Middleware/admin")


// Validation schema using Zod
const signupBody = zod.object({
    name: zod.string().min(1).max(50),
    email: zod.string().email(),
    password: zod.string().min(6),
});

// Signup route for admin
router.post("/signupadmin", async function (req, res) {
    const result = signupBody.safeParse(req.body);
    
    // Await the Zod validation
    if (!result.success) {
        return res.status(400).json({
            message: "Invalid request",
        });
    }

    const adminExist = await Admin.findOne({ email: req.body.email });

    if (adminExist) {
        return res.status(400).json({
            error: "Admin already exists",
        });
    }

    const admin = await Admin.create({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
    });

    const adminID = admin._id;

    // Generate JWT token
    const token = jwt.sign({ adminID }, process.env.SECRET_KEY);

    res.status(200).json({
        message: "Admin created successfully",
        token: token,
        user: admin.name,
    });
});
 

const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
});

// Signin route for admin
router.post("/signinadmin",  async function (req, res) {
    const result = signinBody.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({ error: "Invalid inputs" });
    }

    const adminExist = await Admin.findOne({ email: req.body.email });

    if (!adminExist) {
        return res.status(400).json({ error: "Admin does not exist" });
    }

    const adminId = adminExist._id;

    
    const token = jwt.sign({ adminId }, process.env.SECRET_KEY);

    res.status(200).json({ message: "Admin signed in successfully", token: token });
});

// Route to upload courses 

router.post("/course", adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

   
    const course = await Course.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
});


router.get("/mycourse", adminMiddleware,async function(req, res) {
    const adminId = req.userId;

    const courses = await Course.find({
        creatorId: adminId 
    });

    res.json({
        message: "Course updated",
        courses
    })
})

//this api was throwing all courses

module.exports = router;
