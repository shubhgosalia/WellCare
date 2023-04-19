const Admin = require("../models/Admin");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const Schedule = require("../models/Schedule");

const { AuthenticationError, ClientError } = require("../Utils/Errors");
const jwt = require("jsonwebtoken");


//signing the jwt
const signJWT = async (user_id) => {
    return await promisify(jwt.sign)({ id: user_id }, process.env.JWT_SECRET);
};

//Login route
exports.login = async (req, res, next) => {
    try {
      let user_name = String(req.body.username);
      let pass_word = String(req.body.password);
    
      let user;
      user = await Admin.findOne({
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
      }
  
      if( ! (pass_word === user.password)){
        throw new ClientError("Invalid credentials!");
      }

      const token = await signJWT(user.id);
      console.log("token : ", token);
  
      //it will set the cookie in the browser
      res.cookie("s_Id", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 8 * 3600000),
        // sameSite: 'none',
        // secure: true
      });
      console.log("hello");
      return res.status(200).json({
        message: "You have logged in successfully",
        success: true,
      });
    } catch (err) {
      console.log("Error in the login patient route : ", err);
      return next(err);
    }
};

// router to get all doctors that are not verified by admin
exports.getAllDoctors=async(req,res)=>{
    try{
        const doctors= await Doctor.find({adminVerified:false});
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
exports.verifyDoctor=async(req,res)=>{
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

// router to number of physiotherapist that are registered 
exports.registeredPhysiotherapist=async(req,res)=>{
  try{
      const no= await Doctor.countDocuments()
      return res.status(200).json({
        success: true,
        data:{
          no
        }
    });
  }
  catch(err){
      return next(err);
  }
}

// router to number of patients that are registered 
exports.registeredPatients=async(req,res)=>{
  try{
      const no= await Patient.countDocuments()
      return res.status(200).json({
        success: true,
        data:{
          no
        }
    });
  }
  catch(err){
      return next(err);
  }
}

exports.sessions=async(req,res)=>{
  try{
      const no= await Schedule.countDocuments()
      return res.status(200).json({
        success: true,
        data:{
          no
        }
    });
  }
  catch(err){
      return next(err);
  }
}