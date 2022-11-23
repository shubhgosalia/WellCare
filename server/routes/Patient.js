const express = require('express');
const router = express.Router();
const {Register,Login} = require("../controllers/Patient");

//register route
router.post('/register',Register);

//login route
router.post('/login',Login);

module.exports = router;