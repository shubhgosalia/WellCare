const Doctor = require("../models/Doctor");
const { RegisterDoctorJoi } = require("../joi/DoctorJoi");
const SendEmail = require("../utils/Email");
const bcrypt = require("bcrypt");
const TokenGenerator = require("../Utils/TokenGenerator");
const { cloudinary } = require("../Utils/cloudinary");
const Review = require("../models/review");
const { ClientError } = require("../Utils/Errors");
//registering the doctor
exports.Register = async (req, res, next) => {
  try {
    console.log("abcde");
    const { path, filename } = req.file;
    //validating the fields
    console.log("Request body in Backend Doctor regist:", req.body);
    let user = await RegisterDoctorJoi(req.body);
    //hashing the password
    console.log("User in doctor regist", user);
    const salt = await bcrypt.genSalt(10);
    let newpassword = await bcrypt.hash(user.password, salt);
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
      locality: user.locality,
      specialization: user.specialization,
      years_Of_Experience: user.years_Of_Experience,
      fees: user.fees,
      profile_pic: {
        image_url: path,
        file_name: filename,
      },
      bio: user.bio,
      category: user.category,
      have_clinic: user.have_clinic,
      address: user.address,
      clinic_name: user.clinic_name,
    });

    //generating the link
    let { token } = TokenGenerator();
    doctor.verifyToken = token;
    let link = `http://localhost:4000/auth/verifyAccount/${token}*`;

    //link will expire after one day
    doctor.verifyTokenExpiry = Date.now() + 60 * 60 * 1000 * 24;
    console.log("doctor 123....");
    //storing in the database
    await doctor.save();
    console.log("doctor 456....");

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
      //if any error occurs while sending mails or storing the doctor data we will rollback and delete the doctor record
      await Doctor.findByIdAndDelete(doctor.id);
      throw err;
    }
  } catch (err) {
    console.log("Error in the register doctor route : ", err);
    if (!req.file) {
      return next(new ClientError("Please upload your profile picture"));
    }
    // Deleting the file in cloudinary as there is some Error
    const { filename } = req.file;
    cloudinary.uploader.destroy(filename);
    return next(err);
  }
};

// This is the controller to get all doctors
exports.getDoctors = async (req, res, next) => {
  try {
    //right now setting the limit to 5
    console.log("entered:");
    let limit = 5;
    let start = (req.query.page - 1) * limit + 1;
    let query = {
      "mailVerified":true,
      "adminVerified":true,
    };
    query['category'] = req.query.category;
    query['locality'] = req.query.locality;
    if(req.query.category === 'Physiotherapist'){
      query['specialization'] = req.query.specialization;
    }
    let sortVar = query.ratings !== undefined ? 'ratings' : (query.fees !== undefined ? 'fees' : 'experience');
    let obj={};
    obj[sortVar] = query[sortVar];
    //filtering the doctors based on the category
    let doctors = await Doctor.find(query).select(
        "name rating fees address profile_pic years_Of_Experience category specialization locality licenseNumber phoneNumber clinic_name"
      ).sort(obj);
      // .sort({
      //   a:1
      //   // fees: 1,
      //   // years_Of_Experience: Number(query.experience),
      // });
    // .skip(start - 1)
    // .limit(limit + 1);
    //fetching limit+1 records in order to make sure there are more records to fetch for the user. If the records length is not same as limit+1 then we will know that there are no more records to fetch
    // let moreRecords = false;
    // if (doctors.length === limit + 1) {
    //   moreRecords = true;
    //   //since fetched extra one record to popping it off
    //   doctors.pop();
    // }
    res.status(200).json({
      success: true,
      data: {
        doctors,
        // more: moreRecords,
      },
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

// This is controller for to get a particular doctor
exports.getDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id).select(
      "-type -verifyTokenExpiry -verifyToken -mailVerified -time_registered -adminVerified"
    );
    const reviews = await Review.find({
      doctor: req.params.id,
    })
      .select("-doctor")
      .populate("patient", "name profile_pic");
    console.log("review : ", reviews);
    res.status(200).json({
      success: true,
      data: {
        doctor,
        reviews,
      },
    });
  } catch (err) {
    return next(err);
  }
};
