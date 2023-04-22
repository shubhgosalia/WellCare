const Schedule = require("../models/Schedule");
const Query = require('../models/Query');

//getting the profile of the user - doctor/patient
exports.GetUser = async (req, res, next) => {
    try {
        let user = req.user;
        //getting the upcoming appointments for the user

        let newUser;
        if (user.type === 'Doctor') {
            let appointments = await Schedule.find({ doctor_id: user.id, status: false }, {
                reason: 1,
                date: 1,
                startTime: 1,
                endTime: 1,
                isOnline: 1,
                isBookedByDoc: 1
            }).populate({ path: "slot_blocked_by", select: "profile_pic name type" });
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
            }
        }
        else {
            // Sending patient related information
            // name,email,phoneNumber,username,gender,age,profile_pic
            let appointments = await Schedule.find({ slot_blocked_by: user.id, status: false }, {
                reason: 1,
                date: 1,
                startTime: 1,
                endTime: 1,
                isOnline: 1,
                isBookedByDoc: 1
            }).populate({ path: "doctor_id", select: "profile_pic name specialization category" });
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
                appointments
            }
        }
        return res.status(200).json({
            data: {
                newUser
            },
            success: true,
        });
    } catch (err) {
        console.log("err in the user profile : ", err);
        return next(err);
    }
}

exports.GetContacts = async (req, res, next) => {
    try {
        let contacts;
        if (req.user.type === 'Doctor') {
            contacts = await Schedule.find({ doctor_id: req.user.id, isBookedByDoc: false }).populate('slot_blocked_by', {
                name: 1,
                email: 1,
                profile_pic: 1,
                id: 1
            })
        }
        else {
            contacts = await Schedule.find({ slot_blocked_by: req.user.id }).populate('doctor_id', {
                name: 1,
                email: 1,
                profile_pic: 1,
                id: 1
            })
        }

        return res.status(200).json({
            data: contacts,
            success: true,
        });
    } catch (err) {
        console.log("in the getting contacts route : ", err);
        return next(err);
    }
}

exports.PostQuery = async(req,res,next)=> {
    try{
       let subject = String(req.body.subject);
       let desc = String(req.body.desc);
       await Query.create({
        subject,
        desc,
        name: req.user.name,
        profile_pic_link: req.user.profile_pic.image_url,
        tag: req.user.type
       })

       res.status(201).json({
        success:true,
        message:'We have recieved your query. Our team will look into it'
       })

    }catch(err){
        console.log("err in posting query: ",err);
        return next(err);
    }
}