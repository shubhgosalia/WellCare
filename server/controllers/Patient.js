const Patient = require("../models/patient");
const { RegisterJoi } = require("../joi/PatientJoi");
const SendEmail = require("../utils/Email");
const { ClientError } = require("../Utils/Errors");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

//registering the patient
exports.Register = async (req, res, next) => {
  try {
    console.log("abcde");
    //validating the fields
    let user = await RegisterJoi(req.body);
    console.log("user : ", user);
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    newpassword = await bcrypt.hash(user.password, salt);
    //creating new patient object
    let patient = new Patient({
      name: user.name,
      email: user.email,
      username: user.username,
      password: newpassword,
      phoneNumber: user.phoneNumber,
      age: user.age,
      gender: user.gender
    });
    //storing in the database
    await patient.save();

    //sending the mail
    let mailoptions = {
      to: req.body.email,
      subject: "Welcome to Well Care",
      html: `<div><b>Hello ${user.username},</b><br></br>  We welcome you to our WellCare Health Portal. Hopping this application benefit your health. Have a good experience</div>`
    };
    try {
      await SendEmail(mailoptions, next);
    } catch (err) {
      throw err;
    }

    return res.status(201).json({
      message: "User registered successfully",
      success: true
    });
  } catch (err) {
    console.log("Error in the register patient route : ", err);
    return next(err);
  }
}

//signing the jwt
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
          "username": user_name
        },
        {
          "email": user_name
        }
      ]
    });

    if (!user) {
      throw new ClientError("Invalid credentials!");
    }

    //   if(!user.emailVerified){
    //     throw new ClientError("Email not verified. Please verify your email!");
    //   }

    const isPasswordMatch = await bcrypt.compare(
      pass_word,
      user.password
    );

    if (!isPasswordMatch) {
      throw new ClientError("Invalid credentials!");
    }

    const token = await signJWT(user.id);

    //it will set the cookie in the browser
    res.cookie('s_Id', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 8 * 3600000),
      samesite: true
    });

    return res.status(200).json({
      message: "You have logged in successfully",
      success: true
    });
  } catch (err) {
    console.log("Error in the login patient route : ", err);
    return next(err);
  }
}



