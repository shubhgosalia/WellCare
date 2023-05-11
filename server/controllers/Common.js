const Schedule = require("../models/Schedule");
const Query = require("../models/Query");
const SendEmail = require("../utils/Email");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const crypto = require("crypto");
const mongoose = require("mongoose");

//getting the profile of the user - doctor/patient
exports.GetUser = async (req, res, next) => {
  try {
    let user = req.user;
    //getting the upcoming appointments for the user

    let newUser;
    if (user.type === "Doctor") {
      let appointments = await Schedule.find(
        { doctor_id: user.id, status: false },
        {
          reason: 1,
          date: 1,
          startTime: 1,
          endTime: 1,
          isOnline: 1,
          isBookedByDoc: 1,
        }
      ).populate({ path: "slot_blocked_by", select: "profile_pic name type" });
      // Sending doctor related information
      // name,age,gender,licenseNumber,city,specialization,years_Of_Experience,phoneNumber,fees,email,clinic_address,have_clinic,username,category,bio,profile_pic
      newUser = {
        name: user.name,
        age: user.age,
        gender: user.gender,
        licenseNumber: user.licenseNumber,
        locality: user.locality,
        specialization: user.specialization,
        years_Of_Experience: user.years_Of_Experience,
        phoneNumber: user.phoneNumber,
        fees: user.fees,
        email: user.email,
        clinic_address: user.clinic_address,
        username: user.username,
        category: user.category,
        bio: user.bio,
        profile_pic: user.profile_pic,
        id: user.id,
        type: user.type,
        appointments,
        adminVerified: user.adminVerified,
        rating: user.rating,
      };
    } else {
      // Sending patient related information
      // name,email,phoneNumber,username,gender,age,profile_pic
      let appointments = await Schedule.find(
        { slot_blocked_by: user.id, status: false },
        {
          reason: 1,
          date: 1,
          startTime: 1,
          endTime: 1,
          isOnline: 1,
          isBookedByDoc: 1,
        }
      ).populate({
        path: "doctor_id",
        select: "profile_pic name specialization category",
      });
      newUser = {
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        username: user.username,
        gender: user.gender,
        age: user.age,
        profile_pic: user.profile_pic,
        id: user.id,
        type: user.type,
        appointments,
      };
    }
    return res.status(200).json({
      data: {
        newUser,
      },
      success: true,
    });
  } catch (err) {
    console.log("err in the user profile : ", err);
    return next(err);
  }
};

exports.GetContacts = async (req, res, next) => {
  try {
    let contacts;
    if (req.user.type === "Doctor") {
      const contacts_id = await Schedule.distinct("slot_blocked_by", {
        doctor_id: req.user.id,
        isBookedByDoc: false,
      });
      contacts = await Patient.find({ _id: { $in: contacts_id } }).select(
        "name email profile_pic id"
      );
    } else {
      const contacts_id = await Schedule.distinct("doctor_id", {
        slot_blocked_by: req.user.id,
      });
      contacts = await Doctor.find({ _id: { $in: contacts_id } }).select(
        "name email profile_pic id"
      );
    }
    console.log("Contact in server", contacts);
    return res.status(200).json({
      data: contacts,
      success: true,
    });
  } catch (err) {
    console.log("in the getting contacts route : ", err);
    return next(err);
  }
};

exports.PostQuery = async (req, res, next) => {
  try {
    let subject = String(req.body.subject);
    let desc = String(req.body.desc);
    await Query.create({
      subject,
      desc,
      name: req.user.name,
      profile_pic_link: req.user.profile_pic.image_url,
      tag: req.user.type,
    });

    res.status(201).json({
      success: true,
      message: "We have recieved your query. Our team will look into it",
    });
  } catch (err) {
    console.log("err in posting query: ", err);
    return next(err);
  }
};

exports.mail = async (req, res, next) => {
  try {
    let patient = await Patient.findById(
      mongoose.Types.ObjectId(req.body.patient_id)
    );
    let doctor = await Doctor.findById(
      mongoose.Types.ObjectId(req.body.doctor_id)
    );
    let book = await Schedule.findById(
      mongoose.Types.ObjectId(req.body.book_id)
    );
    // console.log(patient)
    let id = crypto.randomBytes(20).toString("hex");
    let meetLink = `http://localhost:3000/video/${id}`;

    let mail1 = {
      to: doctor.email,
      subject: "New Appointment",
      html: `<div><b>Hello Dr. ${
        doctor.name
      },</b><br></br>  You have a new appointment!.<br></br> <b>Appointment Details : </b> <br></br> Date: ${
        book.date
      } <br></br> 
        Time: ${book.startTime}:00 ${book.startTime < 12 ? "AM" : "PM"} - ${
        book.endTime
      }:00 ${book.endTime < 12 ? "AM" : "PM"} <br></br>
        ${book.isOnline ? `Meeting Url  : ${meetLink}<br></br>` : ""}
        We hope you a very good luck!
      </div>`,
    };

    let mail2 = {
      to: patient.email,
      subject: "Appointment Booked",
      html: `<div><b>Hello ${
        patient.name
      },</b><br></br>  Your Appointment has been booked succesfully!.<br></br> <b>Appointment Details : </b> <br></br> Date: ${
        book.date
      } <br></br> 
            Time: ${book.startTime}:00 ${book.startTime < 12 ? "AM" : "PM"} - ${
        book.endTime
      }:00 ${book.endTime < 12 ? "AM" : "PM"} <br></br>
      ${book.isOnline ? `Meeting Url  : ${meetLink}<br></br>` : null}   
            We hope you will get good treatment!
          </div>`,
    };

    await SendEmail(mail1, next);
    await SendEmail(mail2, next);

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log("err in posting query: ", err);
    return next(err);
  }
};

exports.GetQuery = async (req, res, next) => {
  try {
    const query = await Query.find();
    res.status(201).json({
      success: true,
      data: query,
    });
  } catch (err) {
    console.log("err in Getting query: ", err);
    return next(err);
  }
};
