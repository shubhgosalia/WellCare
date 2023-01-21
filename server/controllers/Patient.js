const Patient = require("../models/patient");
const { RegisterJoi } = require("../joi/PatientJoi");
const SendEmail = require("../utils/Email");
const bcrypt = require("bcrypt");
const TokenGenerator = require("../Utils/TokenGenerator");

//registering the patient
exports.Register = async (req, res, next) => {
  try {
    console.log("abcde");
    //validating the fields
    let user = await RegisterJoi(req.body);
    console.log("user : ", user);
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    let newpassword = await bcrypt.hash(user.password, salt);
    //creating new patient object
    let patient = new Patient({
      name: user.name,
      email: user.email,
      username: user.username,
      password: newpassword,
      phoneNumber: user.phoneNumber,
      age: user.age,
      gender: user.gender,
    });

    //generating the link
    let { token } = TokenGenerator();
    patient.verifyToken = token;
    let link = `http://localhost:4000/auth/verifyAccount/${token}@`;

    //link will expire after one day
    patient.verifyTokenExpiry = Date.now() + 60 * 60 * 1000 * 24;

    //storing in the database
    await patient.save();

    //sending the mail for enail verification
    let mailoptions = {
      to: req.body.email,
      subject: "Verify EmailID",
      html: `<div><b>Hello ${user.username},</b><br></br>  We recieved your request for the registeration on our WellCare Health Portal.<br></br> To continue without any interrrupted services, <a href=${link}> Click Here </a> to verify your EmailID.The link will expire in a day. <br></br> Once expired the account will be <b>deleted</b>.</div>`,
    };

    try {
      await SendEmail(mailoptions, next);
      return res.status(201).json({
        message: "Verification link has been sent on your registered Email ID",
        success: true,
      });
    } catch (err) {
      //if any error occurs while sending mails or storing the patient data we will rollback and delete the patient record
      await Patient.findByIdAndDelete(patient.id);
      throw err;
    }
  } catch (err) {
    console.log("Error in the register patient route : ", err);
    return next(err);
  }
};
