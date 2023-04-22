const mongoose = require('mongoose');
//doctor model
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
    licenseNumber: {
        type: String,
        required: [true, "User should have a license Number"]
    },
    locality: {
        type: String,
        required: [true, "User should have a locality"]
    },
    specialization: {
        type: String,
        default: " "
        // required: [true, "User should have a specialization"]
    },
    years_Of_Experience: {
        type: Number,
        required: [true, "User should have a license Number"]
    },
    phoneNumber: {
        type: String,
        required: [true, "User should have a Phone Number"]
    },
    fees: {
        type: Number,
        required: [true, "User should have a Fees"]
    },
    profile_pic: {
        image_url: {
            type: String,
            // required: [true, "User should have a  image url"],
            default: "https://res.cloudinary.com/dprscch9k/image/upload/v1677739579/Well%20Care/k6njbwcuucgeqkmv9sft.png",
        },
        file_name: {
            type: String,
            // required: [true, "User should have a  image file_name"]
        }
    },
    email: {
        type: String,
        required: [true, "User should have a Email"],
        unique: true
    },
    clinic_name:{
        type:String
    },
    address: {
        type: String
    },
    have_clinic: {
        type: Boolean,
        default: false
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
    category: {
        type: String,
        required: [true, "User should have a category"]
    },
    bio: {
        type: String,
        required: [true, "User should have a bio"]
    },
    time_registered: {
        type: Date,
        default: Date.now
    },
    adminVerified:{
        type:Boolean,
        default:false,
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
    type: {
        type: String,
        default: "Doctor"
    },
    rating: {
        type: Number,
        default: 0
    }
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });

doctorSchema.index({category:1});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;