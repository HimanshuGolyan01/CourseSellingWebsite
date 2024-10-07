const express = require("express")
const mongoose = require("mongoose")

const connectDB = async () => {
        try {
            const db = await mongoose.connect(process.env.MONGO_URI)
            console.log("Database is connected")
        } catch (error) {
            console.log(error)
        }
}

module.exports = connectDB