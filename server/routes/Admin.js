const express = require('express');
const { login, getAllDoctors, verifyDoctor, statistics, Register, } = require('../controllers/Admin');
const Auth = require('../Middleware/Auth');
const isAdmin = require('../Middleware/Admin');

const router = express.Router();


// route to register the admin
router.post('/signup',Register)

// route to get all doctors that are not verified
router.get('/getAllDoctors',Auth,isAdmin ,getAllDoctors)

// route to verify the particular doctor
router.patch('/verifyDoctor/:id',Auth,isAdmin,verifyDoctor)

// route to get number of physiotherapist that are registered into portal
router.get('/stats',Auth, isAdmin, statistics)


module.exports = router;