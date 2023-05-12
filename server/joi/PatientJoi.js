//joi validations
const joi = require('joi');
joi.objectId = require('joi-objectid')(joi);

const {ClientError} = require("../Utils/Errors");

//using joi for validating the user entered fields
exports.RegisterJoi = async (body)=>{
   const schema = joi.object({
     name: joi.string().required(),
    //  email : joi.string().regex(/^[a-z]+\d*\.?[a-z\d]*@(mail|gmail|hotmail|yahoo|somaiya)\.(com|in|edu)$/).required(),
    email : joi.string().required(),
     username: joi.string().min(6).max(25).regex(/^[a-z]+[a-z\d]*$/).required(),
     password : joi.string().min(8).max(15).regex(/^[a-zA-Z]+[a-zA-Z\d]*[@$#]+[a-zA-Z@$#\d]*\d+$/).required(),
     phoneNumber: joi.string().length(10).pattern(/^[0-9]+$/).required(),
     age: joi.number().required(),
     gender: joi.string().required(),
   });

   try{
     return await schema.validateAsync(body);
   }catch(err){
    console.log("register patient joi : ",err);
    if(err.details[0].message.includes('email')){
      throw new ClientError("Invalid Email ID");
    }else if(err.details[0].message.includes('password')){
      throw new ClientError("Please enter the password as mentioned");
    } else if (err.details[0].message.includes('username' && 'fails')) {
      throw new ClientError("No special characters or only digits allowed");
    }
    else {
      throw new ClientError(err.details[0].message.replace(/"/g,""));
    }
   }
}

//using joi for validating the book appointment fields
exports.BookAppointmentJoi = async (body) => {
  const schema = joi.object({
    startTime: joi.number().required(),
    endTime: joi.number().required(),
    isOnline: joi.boolean().required(),
    reason: joi.string().required(),
    isBookedByDoc: joi.boolean(),
    date: joi.date().required(),
    doctor_id: joi.objectId().required(),
  });

  try {
    return await schema.validateAsync(body);
  } catch (err) {
    console.log("book appointment joi : ", err);
    throw new ClientError(err.details[0].message.replace(/"/g, ""));
  }
}