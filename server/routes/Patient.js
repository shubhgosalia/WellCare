const express = require('express');
const router = express.Router();
const { Register } = require("../controllers/Patient");

//register route
router.post('/register', Register);

module.exports = router;