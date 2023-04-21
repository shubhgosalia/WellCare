const Admin = require("../models/Admin");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const Schedule = require("../models/Schedule");
const bcrypt = require('bcrypt');

exports.Register = async (req, res, next) => {
  try {
    let user= req.body;
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    let newpassword = await bcrypt.hash(user.password, salt);
    //creating new doctor object
    let admin = new Admin({
      name: user.name,
      email: user.email,
      username: user.username,
      password: newpassword,
    });
    await admin.save();
    
    return res.status(201).json({
      message: "Successfully registered",
      success: true
    });
  } catch (err) {
    console.log("Error in the register admin route : ", err);
    return next(err);
  }
}

// router to get all doctors that are not verified by admin
exports.getAllDoctors=async(req,res,next)=>{
    try{
        const doctors= await Doctor.find({adminVerified:false}).select("name age gender category email licenseNumber phoneNumber locality");
        // const doctors= await Doctor.find({adminVerified:false})
        
        return res.status(200).json({
            success: true,
            data:{
                doctors
            }
        });
    }
    catch(err){
        return next(err);
    }
}

// router to veirfy the paticular doctor
exports.verifyDoctor=async(req,res,next)=>{
    try{
        const doctor=await Doctor.findByIdAndUpdate(req.params.id,{adminVerified:true},{
            new:true,
            runValidators:true
        })
        return res.status(200).json({
            message:"Doctor is verified successfully",
            success: true
        });
    }
    catch(err){
        return next(err);
    }
}

// router to display all the statistics 
exports.statistics=async(req,res,next)=>{
  try{
      const physio= await Doctor.find({category: 'Physiotherapist'}).countDocuments()
      const nutri= await Doctor.find({category: 'Nutritionist'}).countDocuments()
      const gym= await Doctor.find({category: 'Gym Trainer'}).countDocuments()
      const patients= await Patient.countDocuments()
      const appointments= await Schedule.countDocuments()
      const avgSessions = appointments/patients

      return res.status(200).json({
        success: true,
        data:{
          physio,
          nutri,
          gym,
          patients,
          appointments,
          avgSessions
        }
    });
  }
  catch(err){
      console.log("Err",err)
      return next(err);
  }
}