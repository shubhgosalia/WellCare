const express = require('express');
const router = express.Router();
const { createReview, getReviews } = require("../controllers/review");

//Create Review Route
router.post('/', createReview);

// Read all reviews route
// router.get('/',getReviews)

module.exports = router;