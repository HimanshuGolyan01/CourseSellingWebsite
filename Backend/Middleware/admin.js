const express = require("express");
const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
    const adminAuthHeader = req.headers.authorization;

    if (!adminAuthHeader || !adminAuthHeader.startsWith('Bearer ')) {
        return res.status(400).json({ msg: "Invalid Header" });
    }

    const token = adminAuthHeader.split(' ')[1]; 

    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decode.userId;
        next(); 
    } catch (error) {
        return res.status(403).json({ error: "Invalid User" });
    }
};

module.exports = adminMiddleware;
