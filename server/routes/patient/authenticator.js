const express = require('express');

const router=express.Router();
router.post('/register',patientRegistration);
router.post('/login',patientLogin);