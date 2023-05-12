//joi validations
const joi = require('joi');
const { ClientError } = require("../Utils/Errors");

//using joi for validating the user entered fields
exports.RegisterDoctorJoi = async (body) => {
  const schema = joi.object({
    name: joi.string().required(),
    // email: joi.string().regex(/^[a-z]+\d*\.?[a-z\d]*@(gmail|hotmail|yahoo|somaiya)\.(com|in|edu)$/).required(),
    email: joi.string().required(),
    username: joi.string().min(5).max(25).required(),
    password: joi.string().min(8).max(15).regex(/^[a-zA-Z]+[a-zA-Z\d]*[@$#]+[a-zA-Z@$#\d]*\d+$/).required(),
    phoneNumber: joi.string().length(10).pattern(/^[0-9]+$/).required(),
    age: joi.number().required(),
    gender: joi.string().required(),
    licenseNumber: joi.string().length(10).required(),
    locality: joi.string().required(),
    specialization: joi.string(),
    years_Of_Experience: joi.number().required(),
    fees: joi.number().required(),
    bio: joi.string().required(),
    address: joi.string(),
    have_clinic: joi.boolean(),
    category: joi.string().required(),
    clinic_name:joi.string().required()
  });

  try {
    return await schema.validateAsync(body);
  } catch (err) {
    console.log("register Doctor joi : ", err);
    if (err.details[0].message.includes('email')) {
      throw new ClientError("Invalid Email ID");
    } else if (err.details[0].message.includes('password')) {
      throw new ClientError("Please enter the password as mentioned");
    } else if (err.details[0].message.includes('licenseNumber' && '10')) {
      throw new ClientError("Invalid License Number");
    }
    else {
      throw new ClientError(err.details[0].message.replace(/"/g, ""));
    }
  }
}