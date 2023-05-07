const express = require("express");
const Auth = require("../Middleware/Auth");
const router = express.Router();
const {
  VerifyAccount,
  Login,
  GeneratePasswordLink,
  SetPassword,
  Logout,
  ResetPassword,
} = require("../controllers/Auth");

//email verify route - This is common for both patient as well as doctor
router.get("/verifyAccount/:token", VerifyAccount);

//login route
router.post("/login", Login);

//forgot password
router.post("/forgotpassword", GeneratePasswordLink);

//setting the password
router.post("/setpassword/:token", SetPassword);

//reset password
router.post("/resetpassword", Auth, ResetPassword);

//logout route
router.get("/logout", Auth, Logout);

module.exports = router;
