const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("../Utils/Errors");
const { promisify } = require('util');
const Patient = require('../models/Patient');
const Doctor = require("../models/Doctor");

//it will be executed on every request.If the token is not found then the user will need to login into the system.
const Auth = async (req, _res, next) => {
    try {
        let token = req.cookies.s_Id;
        if (!token) {
            throw new AuthenticationError("Please login!");
        }
        const decoder = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        let user = await Patient.findById(decoder.id);
        if (!user) {
            user = await Doctor.findById(decoder.id);
            if (!user) {
                throw new AuthenticationError("Something went wrong...!!");
            }
        }
        req.user = user;
        console.log("user : ", req.user.password);
        next();

    } catch (err) {
        console.log("error auth middleware : ", err);
        return next(err);
    }
}
module.exports = Auth;