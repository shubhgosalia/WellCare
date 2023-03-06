const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const Schedule = require("../models/Schedule");
const { AuthenticationError, ClientError } = require("../Utils/Errors");
const { promisify } = require("util");


//getting the profile of the user - doctor/patient
exports.GetUser = async (req, res, next) => {
    try {
        let user = req.user;
        // console.log("User", user);
        let newUser;
        if (user.type === 'Doctor') {
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
                type: user.type
            }
        }
        else {
            // Sending patient related information
            // name,email,phoneNumber,username,gender,age,profile_pic
            newUser = {
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                username: user.username,
                gender: user.gender,
                age: user.age,
                profile_pic: user.profile_pic,
                id: user.id,
                type: user.type
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
            contacts = await Schedule.find({ doctor_id: req.user.id }).populate('slot_blocked_by', {
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