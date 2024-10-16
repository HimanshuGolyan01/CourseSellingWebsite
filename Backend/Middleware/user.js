const express = require("express")
const jwt = require('jsonwebtoken')


const userMiddleware = (req , res , next) => {
  

    const userAuthHeader = req.headers.authorization
    if (!userAuthHeader || !userAuthHeader.startsWith('Bearer ')) {
        return res.status(400).json({ msg: "Invalid Header" });
    }

    const token = userAuthHeader.split(' ')[1]; 

    try {
        const decode =  jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decode.userId;
        next();
    } catch (error) {
        return res.status(400).json({msg : "Invalid User"})
    }
}

module.exports = userMiddleware