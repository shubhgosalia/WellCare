const Review=require('../models/review');

module.exports.createReview=async(req,res,next)=>{
    try{
        const review=await Review.create(req.body);
        
        res.status(200).json({
            status:"Success",
            data:{
                review
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:"Fail",
            message:err
        })
    }
}

module.exports.getReviews=async(req,res,next)=>{
    try{    
        const reviews=await Review.find();
        res.status(200).json({
            status:"Success",
            data:{
                reviews
            }
        })
    }   
    catch(err){
        res.status(404).json({
            status:"Fail",
            message:err
        })
    }
}
