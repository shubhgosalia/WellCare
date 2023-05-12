const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const Admin = require("../models/Admin");

const {
  AuthenticationError,
  ClientError,
  AuthorizationError,
} = require("../Utils/Errors");
const SendEmail = require("../utils/Email");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const bcrypt = require("bcrypt");
const TokenGenerator = require("../Utils/TokenGenerator");
const catchAsyncError = require("../Utils/catchAsyncError");

//ALL THE AUTH RELATED FUNCTIONS WHICH ARE COMMON FOR PATIENT AND DOCTOR WILL BE PLACED HERE.

//verifying the account via mail
exports.VerifyAccount = catchAsyncError(async (req, res, next) => {
  try {
    //getting the token
    console.log("token ", req.params);
    let token = req.params.token;
    console.log("Token in verification is", token);
    //if last letter @:patient or #:doctor
    let last_sym = token.charAt(token.length - 1);
    console.log("last_digit is ", last_sym);
    let a = token.slice(0, -1);
    console.log("A in verification is", a);
    let user;
    //PATIENT PART
    if (last_sym === "@") {
      user = await Patient.find({ verifyToken: a });
      console.log("Patient : ", user[0]);
    }
    //DOCTOR PART
    else {
      user = await Doctor.find({ verifyToken: a });
      console.log("Doctor : ", user[0]);
    }
    //if there is no such patient or Doctor
    if (!user[0]) {
      throw new AuthenticationError("No such account exists...");
    }
    console.log("Date : ", Date.now());
    console.log("user : ", new Date(user[0].verifyTokenExpiry).getTime());
    //if the token is expired then delete the record
    if (new Date(user[0].verifyTokenExpiry).getTime() < Date.now()) {
      if (last_sym === "@") {
        await Patient.findByIdAndDelete(user[0].id);
      } else {
        await Doctor.findByIdAndDelete(user[0].id);
      }
      throw new AuthenticationError(
        "invalid/expired url... please register again"
      );
    }

    console.log("user .... : ", user[0]);

    //if the patient/doctor verifies the mail then we will update the account and send the mail accordingly
    if (last_sym === "@") {
      await Patient.findByIdAndUpdate(user[0].id, {
        verifyToken: null,
        verifyTokenExpiry: null,
        mailVerified: true,
      });
    } else {
      await Doctor.findByIdAndUpdate(user[0].id, {
        verifyToken: null,
        verifyTokenExpiry: null,
        mailVerified: true,
      });
    }

    console.log("hehehhehehehheheheh");

    //sending welcome email
    let mailoptions = {
      to: user[0].email,
      subject: "Welcome to WellCare!",
      html:
        last_sym === "@"
          ? //patient mail
            `<div><b>Hello ${user[0].username},</b><br></br>  We welcome you to our WellCare Health Portal. Hoping this application will benefit your health. Use this application to your fullest.<br></br> Thank You for choosing us :)</div>`
          : //doctor mail
            `<div><b>Hello ${user[0].username},</b><br></br>  We welcome you to our WellCare Health Portal. We are highly obliged to have such a professional on our platform. Use this application to your fullest.<br></br> Thank You for choosing us :)</div>`,
    };

    await SendEmail(mailoptions, next);

    console.log("mail sent");

    // return res.status(200).json({
    //   message: "Email verified successfully!!",
    //   success: true,
    // });
    return res.redirect("http://localhost:3000/VerifySuccess");
  } catch (err) {
    console.log("err in the verification email : ", err);
    return next(err);
  }
});

//signing the jwt
const signJWT = async (user_id) => {
  return await promisify(jwt.sign)({ id: user_id }, process.env.JWT_SECRET);
};

//password match
const isPasswordMatch = async (pass_word, ogpass) => {
  console.log("heyy");
  return await bcrypt.compare(pass_word, ogpass);
};

//Login route
exports.Login = async (req, res, next) => {
  try {
    let user_name = String(req.body.username);
    let pass_word = String(req.body.password);
    console.log("logiiiiiiinnnnnnnnnn");
    console.log(req.body.type);
    //type can either patient or doctor
    let user;
    if (req.body.type === "Patient") {
      user = await Patient.findOne({
        $or: [
          {
            username: user_name,
          },
          {
            email: user_name,
          },
        ],
      });
    } else if (req.body.type === "Doctor") {
      user = await Doctor.findOne({
        $or: [
          {
            username: user_name,
          },
          {
            email: user_name,
          },
        ],
      });
    } else {
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
    }

    if (!user) {
      throw new ClientError("Invalid credentials!");
    }

    if (!user.mailVerified) {
      throw new ClientError("Email not verified. Please verify your email!");
    }

    if (user.type === "Doctor" && !user.adminVerified) {
      throw new AuthorizationError(
        "Profile under review.You'll get a mail after successful verification"
      );
    }

    if (!(await isPasswordMatch(pass_word, user.password))) {
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
      token: token,
    });
  } catch (err) {
    console.log("Error in the login patient route : ", err);
    return next(err);
  }
};

//forgot the password.
exports.GeneratePasswordLink = async (req, res, next) => {
  try {
    let type = req.body.type;
    let user;
    //PATIENT PART
    if (type === "Patient") {
      user = await Patient.find({ email: req.body.email });
    }
    //DOCTOR PART
    else {
      user = await Doctor.find({ email: req.body.email });
    }

    //if there is no such patient/doctor
    if (!user[0]) {
      throw new AuthenticationError("No such account exists...");
    }

    //if the account exists but they haven't verified their mail
    if (!user[0].mailVerified) {
      throw new AuthenticationError(
        "Email not verified yet. Please verify it..."
      );
    }

    //generating the link
    let { token } = TokenGenerator();
    let link = `http://localhost:3000/resetpassword/${token}${
      req.body.type === "Patient" ? "@" : "*"
    }`;

    if (req.body.type === "Patient") {
      await Patient.findByIdAndUpdate(user[0].id, {
        verifyToken: token,
        verifyTokenExpiry: Date.now() + 60 * 60 * 1000 * 24,
      });
    } else {
      await Doctor.findByIdAndUpdate(user[0].id, {
        verifyToken: token,
        verifyTokenExpiry: Date.now() + 60 * 60 * 1000 * 24,
      });
    }

    //sending password link
    let mailoptions = {
      to: user[0].email,
      subject: "Password Link!",
      html: `<div><b>Hello ${user[0].username},</b><br></br> As per your request, the link for setting your new password has been generated.<br></br> Please <a href=${link}>Click Here </a> for changing up your password. The link will expire soon</div>`,
    };
    try {
      await SendEmail(mailoptions, next);
    } catch (err) {
      //if the mail is not sent or any error occurs just clean the record
      if (req.body.type === "Patient") {
        await Patient.findByIdAndUpdate(user[0].id, {
          verifyToken: null,
          verifyTokenExpiry: null,
        });
      } else {
        await Doctor.findByIdAndUpdate(user[0].id, {
          verifyToken: null,
          verifyTokenExpiry: null,
        });
      }
    }

    return res.status(200).json({
      message:
        "Password link has been sent on your registered email successfully!!",
      success: true,
    });
  } catch (err) {
    console.log("err in the forgot password : ", err);
    return next(err);
  }
};

//setting the password
exports.SetPassword = async (req, res, next) => {
  try {
    //getting the token
    let token = req.params.token;

    //if last letter @:patient or #:doctor
    let last_sym = token.charAt(token.length - 1);
    let a = token.slice(0, -1);
    let user;
    //PATIENT PART
    if (last_sym === "@") {
      user = await Patient.find({ token: a });
    }
    // DOCTOR PART
    else {
      user = await Doctor.find({ token: a });
    }

    //if there is no such patient or doctor
    if (!user[0] || !user[0].mailVerified) {
      throw new AuthenticationError(
        "No such id exists or mail not verified yet..."
      );
    }

    //if the token is expired
    if (user[0].verifyTokenExpiry < Date.now()) {
      throw new AuthenticationError(
        "invalid/expired url... please generate new link"
      );
    }

    //hashing the password
    const salt = await bcrypt.genSalt(10);
    let newpassword = await bcrypt.hash(req.body.password, salt);

    //for patient
    if (last_sym === "@") {
      await Patient.findByIdAndUpdate(user[0].id, {
        verifyToken: null,
        verifyTokenExpiry: null,
        password: newpassword,
      });
    }
    //for doctor
    else {
      await Doctor.findByIdAndUpdate(user[0].id, {
        verifyToken: null,
        verifyTokenExpiry: null,
        password: newpassword,
      });
    }

    return res.status(200).json({
      message: "New password set successfully!!",
      success: true,
    });
  } catch (err) {
    console.log("err in the set password : ", err);
    return next(err);
  }
};

//reset password
exports.ResetPassword = async (req, res, next) => {
  try {
    //checking the original password
    if (
      !(await isPasswordMatch(String(req.body.password), req.user.password))
    ) {
      throw new ClientError("Invalid password....");
    }

    //checking the regex of the password
    let pattern = /^[a-zA-Z]+[a-zA-Z\d]*[@$#]+[a-zA-Z@$#\d]*\d+$/;
    let newPassword = String(req.body.newPassword);
    if (
      newPassword.length < 8 ||
      newPassword.length > 25 ||
      !pattern.test(newPassword)
    ) {
      throw new ClientError("Please enter the password as mentioned..");
    }

    //hashing the password
    const salt = await bcrypt.genSalt(10);
    newPassword = await bcrypt.hash(newPassword, salt);

    //updating the password
    if (req.user.type === "Doctor") {
      await Doctor.findByIdAndUpdate(req.user.id, { password: newPassword });
    } else {
      await Patient.findByIdAndUpdate(req.user.id, { password: newPassword });
    }

    //sending the response
    return res.status(200).json({
      success: true,
      message: "Password updated successfully.....",
    });
  } catch (err) {
    console.log("err in the reset password : ", err);
    return next(err);
  }
};

// Logout controller
exports.Logout = async (req, res, next) => {
  try {
    res.clearCookie("s_Id");
    res.status(200).json({
      success: true,
      message: "You are logged out successfully!",
    });
  } catch (err) {
    return next(err);
  }
};
