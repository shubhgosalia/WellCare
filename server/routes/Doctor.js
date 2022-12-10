const express = require('express');
const router = express.Router();
const { Register, getDoctors, getDoctor ,createReviews} = require("../controllers/Doctor");
const Auth=require('../Middleware/Auth')
const multer=require('multer')
const {storage} = require('../Utils/cloudinary')
const upload = multer({ storage });

//register route
router.post('/register', upload.single('profile_pic'), Register);
// get all Doctors route
router.get('/',getDoctors);

// get a particular Doctor route
router.get('/:id',getDoctor);

module.exports = router;