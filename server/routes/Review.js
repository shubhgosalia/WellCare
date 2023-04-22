const express = require('express');
const router = express.Router();
const { createReview, getReviews ,updateReview} = require("../controllers/review");
const Auth = require("../Middleware/Auth");

// THINGS TO DO
//1. implement logic to delete a review by an user

//Create Review Route
router.post('/', Auth,createReview);

// Read all reviews route
// router.get('/',getReviews)

// Update Review Route
router.patch('/:id',Auth,updateReview);


module.exports = router;