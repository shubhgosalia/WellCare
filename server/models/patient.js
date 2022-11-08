const mongoose= require('mongoose');
const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"User should have a name"]
    },
    email:{
        type:String,
        required:[true,"User should have a Email"]
    },
    phoneNumber:{
        type:String,
        required:[true,"User should have a Phone Number"]
    },
    password:{
        type:String,
        required:[true,"User should have a password"]
    },
    gender:{
        type:String,
        required:[true,"User should have a Gender"]
    },
    age:{
        type:Number,
        required:[true,"User should have a Age"]
    }
})
const Patient = new mongoose.model("Patient",patientSchema);

module.exports = Patient;