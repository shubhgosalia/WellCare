const express = require('express');
const { login, getAllDoctors, verifyDoctor, registeredPhysiotherapist, registeredPatients, sessions } = require('../controllers/Admin');
const Auth = require('../Middleware/Auth');
const router = express.Router();

// route to login the admin
router.get('/login',login);

// route to get all doctors that are not verified
router.get('/getAllDoctors',Auth,getAllDoctors)

// route to verify the particular doctor
router.patch('/verifyDoctor/:id',Auth,verifyDoctor)

// route to get number of physiotherapist that are registered into portal
router.get('/stats/physiotherapist',Auth,registeredPhysiotherapist)

// route to get number of patients that are registered into portal
router.get('/stats/patients',Auth,registeredPatients)

// route to get number of sessions
router.get('/stats/sessions',Auth,sessions)

module.exports = router;