//this file consists of all the common routes for doctor and patient
const express = require('express');
const Auth = require('../Middleware/Auth');
const router = express.Router();
const { GetUser, GetContacts } = require("../controllers/Common");

//profile route
router.get('/profile', Auth, GetUser);

//for fetching contact list
router.get('/contacts', Auth, GetContacts);

module.exports = router;