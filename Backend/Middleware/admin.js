const express = require("express");
const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
    const adminAuthHeader = req.headers.authorization;

    if (!adminAuthHeader || !adminAuthHeader.startsWith('Bearer ')) {
        return res.status(401).json({ msg: "Authorization header missing or malformed" });
    }

    const token = adminAuthHeader.split(' ')[1]; 

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decoded.userId; 
        next(); 
    } catch (error) {
        return res.status(403).json({ error: "Invalid or expired token" });
    }
};

module.exports = adminMiddleware;
