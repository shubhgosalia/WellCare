const express = require('express');
const { route } = require('..');
const router = express.Router();
const { VerifyAccount, Login, GeneratePasswordLink, SetPassword } = require("../controllers/Auth");

//email verify route - This is common for both patient as well as doctor
router.get('/verifyAccount/:token', VerifyAccount);

//login route
router.post('/login', Login);

//forgot password
router.post('/forgotpassword', GeneratePasswordLink);

//setting the password
router.post('/setpassword/:token', SetPassword);


module.exports = router;