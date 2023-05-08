const express = require('express');
const router = express.Router();
const Auth = require('../Middleware/Auth');
const { Register, GetAppointments, BookAppointment, getCheckoutSession, getHighestRatedDoctors, DeleteAppointment } = require("../controllers/Patient");

//highest rated docs
router.get('/getTopRatedDocs',Auth,getHighestRatedDoctors);

//register route
router.post('/register', Register);

//get appointments
//please shift to the doctor side
router.get('/getAppointments/:doc_id', Auth, GetAppointments);

//book an appointment
router.post('/bookAppointment/', Auth, BookAppointment);

//book an appointment
router.delete('/deleteAppointment/:id', Auth, DeleteAppointment);

// Payments : checkout session
router.post('/checkoutSession/:doc_id', Auth, getCheckoutSession);


module.exports = router;

