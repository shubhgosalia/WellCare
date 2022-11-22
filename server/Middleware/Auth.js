const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("../Utils/Errors");
const {promisify} = require('util');
const Patient = require('../models/patient');

const Auth = async (req,_res,next)=>{
    try{      
        let token = req.cookies.s_Id;
        if(!token){
            throw new AuthenticationError("Please login!");
        }
        const decoder = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        req.user = await Patient.findById(decoder.id);
        next();
    }catch(err){
        console.log("error auth middleware : " ,err);
        return next(err);
    }
}
module.exports = Auth;