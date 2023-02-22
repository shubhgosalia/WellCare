const Patient = require("../models/patient");
const Doctor = require('../models/doctor');
const Schedule = require('./../models/Schedule');
const { RegisterJoi, BookAppointmentJoi } = require("../joi/PatientJoi");
const SendEmail = require("../utils/Email");
const bcrypt = require("bcrypt");
const TokenGenerator = require("../Utils/TokenGenerator");
const { ClientError } = require("../Utils/Errors");
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);


//POINTS TO BE DISCUSSED
//1. HOW MANY DAYS AHEAD A DOCTOR SHOULD GET THE ACCESS TO THE SCHEDULE
//2. TWO MAILS ARE TIME CONSUMING, WHAT TO DO??


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
    console.log("888888888888888888888888");
    //generating the link
    let { token } = TokenGenerator();
    patient.verifyToken = token;
    let link = `http://localhost:4000/auth/verifyAccount/${token}@`;

    //link will expire after one day
    patient.verifyTokenExpiry = Date.now() + 60 * 60 * 1000 * 24;
    console.log("bbb");
    //storing in the database
    await patient.save();
    console.log("aaaa");
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

//function to calculate difference between days
function calculateDiff(qDate) {
  let date = new Date(qDate);
  let sysDate = new Date().setHours(0, 0, 0);
  // console.log("sysdate1 : ", date - sysDate);
  let diffDays = Math.floor((date - sysDate) / (1000 * 60 * 60 * 24));
  console.log("diff: ", diffDays);
  //checking for invalid dates
  if (diffDays !== diffDays) {
    throw new ClientError("Invalid Date");
  }
  //if the patient selects past date
  if (diffDays < 0) {
    throw new ClientError("Invalid Date");
  }

  if (diffDays > 1) {
    throw new ClientError("Sorry, cannot access!");
  }
  return date.toLocaleDateString();
}


//getting the appointments of a doctor for a particular date
exports.GetAppointments = async (req, res, next) => {
  try {
    let date = calculateDiff(req.query.date);

    //getting the appointments
    let data = await Schedule.find({ doctor_id: mongoose.Types.ObjectId(req.params.doc_id), date });

    return res.status(200).json({
      data,
      success: true,
    });

  } catch (err) {
    console.log("err in the get appointment route : ", err);
    return next(err);
  }
}


exports.BookAppointment = async (req, res, next) => {
  try {
    let data = await BookAppointmentJoi(req.body);
    calculateDiff(data.date);
    let sysDate = new Date();
    //for changing time
    //new Date(sysDate.getTime() + Math.abs(sysDate.getTimezoneOffset()) * 60000);

    //if the start time of the slot is lesser than the system time do not allow to book
    if ((data.date.toLocaleDateString() == sysDate.toLocaleDateString()) && (data.startTime <= sysDate.getHours())) {
      throw new ClientError("Invalid slot");
    }

    let newObj = {
      date: data.date.toLocaleDateString(),
      startTime: data.startTime,
      endTime: data.endTime,
      reason: data.reason,
      doctor_id: data.doctor_id,
      isBookedByDoc: data.doctor_id === req.user.id ? true : false,
      slot_blocked_by: data.doctor_id === req.user.id ? null : req.user.id,
      isOnline: data.isOnline
    }
    //getting the doctor
    let doctor;
    if (!newObj.isBookedByDoc)
      doctor = await Doctor.findOne({ id: data.doctor_id });
    // add the appointment
    await Schedule.create(newObj);

    //send mails to the patient as well as doctor
    //if the doctor himself/herself has booked his/her slot then do not send any mails

    if (newObj.isBookedByDoc) {
      return res.status(201).json({
        success: true,
        msg: "Your slot has been reserved successfully!"
      });
    }

    let mail1 = {
      to: req.user.email,
      subject: "Appointment Booked",
      html: `<div><b>Hello ${req.user.username},</b><br></br>  Your Appointment has been booked succesfully!.<br></br> <b>Appointment Details : </b> <br></br> Date: ${newObj.date} <br></br> 
      Time: ${newObj.startTime}:00 ${newObj.startTime < 12 ? 'AM' : 'PM'} - ${newObj.endTime}:00 ${newObj.endTime < 12 ? 'AM' : 'PM'} <br></br>
      Mode: ${newObj.isOnline ? 'Online' : 'Offline'} <br></br>
      We hope you will get good treatment!
      </div>`,
    };

    let mail2 = {
      to: doctor.email,
      subject: "New Appointment",
      html: `<div><b>Hello Dr. ${doctor.name},</b><br></br>  You have a new appointment!.<br></br> <b>Appointment Details : </b> <br></br> Date: ${newObj.date} <br></br> 
      Time: ${newObj.startTime}:00 ${newObj.startTime < 12 ? 'AM' : 'PM'} - ${newObj.endTime}:00 ${newObj.endTime < 12 ? 'AM' : 'PM'} <br></br>
      Mode: ${newObj.isOnline ? 'Online' : 'Offline'} <br></br>
      We hope you a very good luck!
      </div>`,
    };

    // try {
    //   await SendEmail(mail1, next);
    //   await SendEmail(mail2, next);
    // } catch (err) {
    //   throw err;
    // }

    return res.status(200).json({
      success: true,
      msg: "Your appointment has been booked successfully!"
    });

  } catch (err) {
    console.log("err in the book appointment route : ", err);
    return next(err);
  }
};

// Payments
exports.getCheckoutSession = async (req, res, next) => {
  console.log("Entering checkout.................")
  try {
    // Get the doctor which patient is trying to book
    const doctor= await Doctor.findById(req.params.doc_id);
    console.log(doctor)
    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      // payment_method_types:['card'],

      // Add a success page
      // HOME PAGE
      success_url: `${req.protocol}://${req.get('host')}`,

      // NEED TO CHECK 
      // CANCEL PAGE
      cancel_url: `${req.protocol}://${req.get('host')}`,
      customer_email:req.user.email,
      submit_type:'book',
      line_items: [
        {
          // THE INFO ABOUT THE DOCTOR THAT PATIENT IS TRYING TO BOOK
          price_data:{
            currency:'inr',
            product_data:{
              name:`${doctor.name}`,
              description:`${doctor.bio}`,
              // images:`${doctor.profile_pic.image_url}`
            },
            unit_amount:`${doctor.fees}`
            
          },
          quantity:1,
        },
      ],  
      
    });
    res.status(200).json({
      success: true,
      session
    })
  } catch (err) {
    console.log("err in payment checkout session : ", err);
    return next(err);
  }
}
