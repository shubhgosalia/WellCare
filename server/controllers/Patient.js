const Patient = require("../models/patient");
const { RegisterJoi } = require("../joi/PatientJoi");
const SendEmail = require("../utils/Email");
const { ClientError } = require("../Utils/Errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

//registering the patient
<<<<<<< HEAD
exports.Register = async (req, res, next) => {
  try {
    console.log("abcde");
=======
exports.Register = async(req,res,next)=>{
 try{
   console.log("abcde");
   //validating the fields
>>>>>>> 6e736c89c5fb841988899d3f7006dfa893cbf33c
    let user = await RegisterJoi(req.body);
    console.log("user : ", user);
    //hashing the password
    const salt = await bcrypt.genSalt(10);
<<<<<<< HEAD
    const newpassword = await bcrypt.hash(user.password, salt);
    let patient = new Patient({
      name: user.name,
      email: user.email,
      username: user.username,
      password: newpassword,
      phoneNumber: user.phoneNumber,
      age: user.age,
      gender: user.gender,
    });
=======
    newpassword = await bcrypt.hash(user.password, salt);
    //creating new patient object
    let patient = new Patient({name: user.name,
                          email : user.email,
                          username : user.username,
                          password : newpassword,
                          phoneNumber: user.phoneNumber,
                          age: user.age, 
                          gender: user.gender});
    //storing in the database
>>>>>>> 6e736c89c5fb841988899d3f7006dfa893cbf33c
    await patient.save();

    //sending the mail
    let mailoptions = {
        to: req.body.email,
        subject: "Welcome to Well Care",
        text: `We welcome you to well care , ${user.username}. Hooping for a good experience`,
    };
    // try{
    //  await SendEmail(mailoptions,next);
    // }catch(err){
    //   throw err;
    // }

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
<<<<<<< HEAD
  } catch (err) {
    console.log("Error in the register patient route : ", err);
    throw err;
  }
};

=======
 }catch(err){
    console.log("Error in the register patient route : ",err);
    return next(err);
 }
}

//signing the jwt
>>>>>>> 6e736c89c5fb841988899d3f7006dfa893cbf33c
const signJWT = async (user_id) => {
  return await promisify(jwt.sign)({ id: user_id }, process.env.JWT_SECRET);
};

exports.Login = async (req, res, next) => {
  try {
    let user_name = String(req.body.username);
    let pass_word = String(req.body.password);

<<<<<<< HEAD
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
=======
          if (!isPasswordMatch) {
             throw new ClientError("Invalid credentials!");
          }
         
          const token = await signJWT(user.id);
      
          //it will set the cookie in the browser
          res.cookie('s_Id', token, {
            httpOnly: true,
            expires : new Date(Date.now() + 8 * 3600000),
            samesite : true
          });
      
          return res.status(200).json({
            message: "You have logged in successfully",
            success: true
          });
    }catch(err){
        console.log("Error in the login patient route : ",err);
        return next(err);
>>>>>>> 6e736c89c5fb841988899d3f7006dfa893cbf33c
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
