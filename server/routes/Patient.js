const express = require('express');
const router = express.Router();
const Auth = require('../Middleware/Auth');
const { Register, GetAppointments, BookAppointment } = require("../controllers/Patient");

//register route
router.post('/register', Register);

//get appointments
router.get('/getAppointments/:doc_id', Auth, GetAppointments);

//book an appointment
router.post('/bookAppointment/:doc_id', Auth, BookAppointment);

module.exports = router;

