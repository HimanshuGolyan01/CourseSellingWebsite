const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin" 
    }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
