<<<<<<< HEAD
const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User should have a name"],
  },
  email: {
    type: String,
    required: [true, "User should have a Email"],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "User should have a Phone Number"],
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
  gender: {
    type: String,
    required: [true, "User should have a Gender"],
  },
  age: {
    type: Number,
    required: [true, "User should have a Age"],
  },
  time_registered: {
    type: Date,
    default: Date.now,
  },
  mailVerified: {
    type: Boolean,
    default: false,
  },
});
const Patient = new mongoose.model("Patient", patientSchema);
=======
const mongoose = require('mongoose');

//patient model
const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"User should have a name"]
    },
    email:{
        type:String,
        required:[true,"User should have a Email"],
        unique: true
    },
    phoneNumber:{
        type:String,
        required:[true,"User should have a Phone Number"]
    },
    username:{
        type:String,
        required:[true,"User should have a username"],
        unique: true
    },
    password:{
        type:String,
        required:[true,"User should have a password"]
    },
    gender:{
        type:String,
        required:[true,"User should have a Gender"]
    },
    age:{
        type:Number,
        required:[true,"User should have a Age"]
    },
    time_registered:{
        type: Date,
        default: Date.now
    },
    mailVerified: {
        type: Boolean,
        default: false
    }
})
const Patient = mongoose.model("Patient",patientSchema);
>>>>>>> 6e736c89c5fb841988899d3f7006dfa893cbf33c

module.exports = Patient;
