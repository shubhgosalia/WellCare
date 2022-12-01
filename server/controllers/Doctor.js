const Doctor = require('../models/doctor')
const { RegisterDoctorJoi } = require('../joi/DoctorJoi');
const SendEmail = require("../utils/Email");
const bcrypt = require('bcrypt');
const TokenGenerator = require("../Utils/TokenGenerator");
const { cloudinary } = require('../Utils/cloudinary')
const Review = require('../models/review')
//registering the doctor
exports.Register = async (req, res, next) => {
  try {
    console.log("abcde");
    const { path, filename } = req.file
    //validating the fields
    let user = await RegisterDoctorJoi(req.body);
    console.log("user : ", user);
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    newpassword = await bcrypt.hash(user.password, salt);
    //creating new doctor object
    let doctor = new Doctor({
      name: user.name,
      email: user.email,
      username: user.username,
      password: newpassword,
      phoneNumber: user.phoneNumber,
      age: user.age,
      gender: user.gender,
      licenseNumber: user.licenseNumber,
      city: user.city,
      specialization: user.specialization,
      years_Of_Experience: user.years_Of_Experience,
      fees: user.fees,
      profile_pic: {
        image_url: path,
        file_name: filename
      },
      bio: user.bio,
      category: user.category,
      have_clinic: user.have_clinic,
      clinic_address: user.clinic_address
    });

    //generating the link
    let { token } = TokenGenerator();
    doctor.verifyToken = token;
    let link = `http://localhost:4000/auth/verifyAccount/${token}#`;

    //link will expire after one day
    doctor.verifyTokenExpiry = Date.now() + (60 * 60 * 1000 * 24);

    //storing in the database
    await doctor.save();

    //sending the mail for enail verification
    let mailoptions = {
      to: req.body.email,
      subject: "Verify EmailID",
      html: `<div><b>Hello ${user.username},</b><br></br>  We recieved your request for the registeration on our WellCare Health Portal.<br></br> To continue without any interrrupted services, <a href=${link}> Click Here </a> to verify your EmailID.The link will expire in a day. <br></br> Once expired the account will be <b>deleted</b>.</div>`
    };

    try {
      await SendEmail(mailoptions, next);
      return res.status(201).json({
        message: "Verification link has been sent on your registered Email ID",
        success: true
      });
    } catch (err) {
      //if any error occurs while sending mails or storing the doctor data we will rollback and delete the doctor record
      await Doctor.findByIdAndDelete(doctor.id);
      throw err;
    }

  } catch (err) {
    // Deleting the file in cloudinary as there is some Error 
    const { filename } = req.file
    cloudinary.uploader.destroy(filename)
    console.log("Error in the register doctor route : ", err);
    return next(err);
  }
}
// NOTE: ADD PAGINATION
// This is the controller to get all doctors 
exports.getDoctors = async (req, res, next) => {
  try {
    console.log(req.user);
    //filtering the doctors based on the category
    let doctors = await Doctor.find(req.query);
    res.status(200).json({
      status: "Success",
      data: {
        doctors
      }
    })
  }
  catch (err) {
    console.log(err)
    return next(err);
  }
}

// This is controller for to get a particular doctor
exports.getDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('review');
    res.status(200).json({
      status: "Success",
      data: doctor
    })
  }
  catch (err) {
    return next(err);
  }
}