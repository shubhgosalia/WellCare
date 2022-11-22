const Patient = require("../models/patient");
const { RegisterJoi } = require("../joi/PatientJoi");
const SendEmail = require("../utils/SendMail");
const { ClientError } = require("../Utils/Errors");
const bcrypt = require("bcrypt");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const sendEmail = require("../")

//registering the patient
exports.Register = async (req, res, next) => {
  try {
    let user = await RegisterJoi(req.body);
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await Patient.create({
      email: user.email,
      username: user.username,
      password: user.password,
      phoneNumber: user.phoneNumber,
      age: user.age,
      gender: user.gender,
    });
    let mailoptions = {
      to: req.body.email,
      subject: "Welcome to Well Care",
      text: `We welcome you to well care , ${req.body.username}. Hooping for a good experience`,
    };
    SendEmail(mailoptions);

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (err) {
    console.log("Error in the register patient route : ", err);
    throw err;
  }
};

const signJWT = async (user_id) => {
  return await promisify(jwt.sign)({ id: user_id }, process.env.JWT_SECRET);
};

exports.Login = async (req, res, next) => {
  try {
    let user_name = String(req.body.username);
    let pass_word = String(req.body.password);

    let user = await Patient.findOne({
      $or: [
        {
          username: user_name,
        },
        {
          email: user_name,
        },
      ],
    });

    if (!user) {
      throw new ClientError("Invalid credentials!");
    }

    //   if(!user.emailVerified){
    //     throw new ClientError("Email not verified. Please verify your email!");
    //   }

    const isPasswordMatch = await bcrypt.compare(pass_word, user.password);

    if (!isPasswordMatch) {
      throw new ClientError("Invalid credentials!");
    }

    const token = await signJWT(user.id);

    //it will set the cookie in the browser
    res.cookie("s_Id", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 8 * 3600000),
      samesite: true,
    });

    return res.status(200).json({
      message: "You have logged in successfully",
      success: true,
    });
  } catch (err) {
    console.log("Error in the login patient route : ", err);
    throw err;
  }
};
