const express = require('express');
const router = express.Router();
const { Register, getDoctors, getDoctor ,createReviews} = require("../controllers/Doctor");
const Auth = require('../Middleware/Auth');
const multer=require('multer')
const {storage} = require('../Utils/cloudinary')
const upload = multer({ storage });


//register route
router.post('/register', upload.single('profile_pic'), Register);
// router.post('/register', Register);

// get all Doctors route
router.get('/', Auth, getDoctors);

// get a particular Doctor route
router.get('/:id', Auth, getDoctor);

module.exports = router;