//this file consists of all the common routes for doctor and patient
const express = require('express');
const Auth = require('../Middleware/Auth');
const router = express.Router();
const { GetUser, GetContacts, PostQuery ,GetQuery,mail} = require("../controllers/Common");

//profile route
router.get('/profile', Auth, GetUser);

//for fetching contact list
router.get('/contacts', Auth, GetContacts);

//for posting queries
router.post('/query',Auth, PostQuery);

//for posting queries
router.post('/sendMail',Auth, mail);
//for getting queries
router.get('/getQuery',Auth, GetQuery);

module.exports = router;