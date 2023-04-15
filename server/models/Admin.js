const mongoose=require("mongoose");

const adminSchema=new mongoose.Schema({
    email: {
        type: String,
        required: [true, "User should have a Email"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "User should have a username"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "User should have a password"],
    },
})

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;