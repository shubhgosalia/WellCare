const mongoose = require("mongoose");

//patient model
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
  profile_pic: {
    image_url: {
      type: String,
      // required:[true, "User should have a  image url"],
      default:
        "https://res.cloudinary.com/dprscch9k/image/upload/v1677739579/Well%20Care/k6njbwcuucgeqkmv9sft.png",
    },
    file_name: {
      type: String,
      // required: [true, "User should have a  image file_name"]
    },
  },
  time_registered: {
    type: Date,
    default: Date.now,
  },
  mailVerified: {
    type: Boolean,
    default: false,
  },
  verifyToken: {
    type: String,
    default: null,
  },
  verifyTokenExpiry: {
    type: Date,
    default: null,
  },
  type: {
    type: String,
    default: "Patient"
  }
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
