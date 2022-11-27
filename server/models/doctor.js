const mongoose = require('mongoose');
//patient model
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User should have a name"]
    },
    age: {
        type: Number,
        required: [true, "User should have a Age"]
    },
    gender: {
        type: String,
        required: [true, "User should have a Gender"]
    },
    licenseNumber:{
        type:String,
        required: [true, "User should have a license Number"]
    },
    city:{
        type:String,
        required: [true, "User should have a license Number"]
    },
    specialization:{
        type:String,
        required: [true, "User should have a specialization"]
    },
    years_Of_Experience:{
        type:Number,
        required: [true, "User should have a license Number"]
    },
    phoneNumber: {
        type: String,
        required: [true, "User should have a Phone Number"]
    },
    fees:{
        type: Number,
        required: [true, "User should have a Fees"]
    },
    profile_pic:{
        image_url:{
            type:String,
            required:[true, "User should have a  image url"]
        },
        file_name:{
            type:String,
            required:[true, "User should have a  image file_name"]
        }
    },
    email: {
        type: String,
        required: [true, "User should have a Email"],
        unique: true
    },
    
    username: {
        type: String,
        required: [true, "User should have a username"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "User should have a password"]
    },
    
    
    time_registered: {
        type: Date,
        default: Date.now
    },
    mailVerified: {
        type: Boolean,
        default: false
    },
    verifyToken: {
        type: String,
        default: null
    },
    verifyTokenExpiry: {
        type: Date,
        default: null
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;