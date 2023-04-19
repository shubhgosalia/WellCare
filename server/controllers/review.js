const Review = require('../models/review');

module.exports.createReview = async (req, res, next) => {
    try {
        const review = await Review.create({ review: String(req.body.review), patient: req.user.id, doctor: req.body.doctor });
        res.status(200).json({
            status: "success",
            data: {
                review
            },
            msg: "Your review has been added successfully!"
        });
    }
    catch (err) {
        console.log("in the create reviews : ", err);
        return next(err);
    }
}

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

module.exports.updateReview=async(req,res,next)=>{
    try{
        const review= await Review.findByIdAndUpdate(req.params.id,{
            review:String(req.body.review)
        });
        res.status(200).json({
            status: "success",
            data: {
                review
            },
            msg: "Your review has been updated successfully!"
        });
    }   
    catch(err){
        return next(err);
    }
}