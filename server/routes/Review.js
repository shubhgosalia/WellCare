const express = require('express');
const router = express.Router();
const { createReview, getReviews } = require("../controllers/review");

// THINGS TO DO
//1. implement logic to delete a review by an user

//Create Review Route
router.post('/', createReview);

// Read all reviews route
// router.get('/',getReviews)

module.exports = router;