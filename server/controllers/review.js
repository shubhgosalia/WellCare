const Review = require("../models/review");
const Sentiment = require("sentiment");

// const reviews = [
//   'This product is amazing!',
//   'I am very happy with my purchase.',
//   'The customer service was terrible.',
//   'I would not recommend this product to anyone.'
// ];

// reviews.forEach(review => {

//   console.log(`${review} | Score: ${score} | Comparative: ${comparative}`);
// });

module.exports.createReview = async (req, res, next) => {
  try {
    const sentiment = new Sentiment();
    const { score, comparative } = sentiment.analyze(String(req.body.review));
    await Review.create({
      review: String(req.body.review),
      patient: req.user.id,
      doctor: req.body.doctor,
      score: score,
      accuracy: comparative,
    });
    res.status(201).json({
      success: true,
      msg: "Your review has been added successfully!",
    });
  } catch (err) {
    console.log("in the create reviews : ", err);
    return next(err);
  }
};

//getting the reviews for a particular doctor
// module.exports.getReviews = async (req, res, next) => {
//     try {
//         const reviews = await Review.find();
//         res.status(200).json({
//             status: "success",
//             data: {
//                 reviews
//             }
//         });
//     }
//     catch (err) {
//         console.log("in the get reviews : ", err);
//         return next(err);
//     }
// }

module.exports.updateReview = async (req, res, next) => {
  try {
    await Review.findByIdAndUpdate(req.params.id, {
      review: String(req.body.review),
    });
    res.status(200).json({
      success: true,
      msg: "Your review has been updated successfully!",
    });
  } catch (err) {
    return next(err);
  }
};
