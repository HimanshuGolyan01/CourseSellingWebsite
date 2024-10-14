const mongoose = require("mongoose");
const { string } = require("zod");

const adminSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    name : String
});

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin