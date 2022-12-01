const mongoose = require('mongoose');
const reviewSchema=new mongoose.Schema({
    review:{
        type:String,
        required:[true,'It should have review']
    },
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        required:[true,'It should have a patient Id']
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        required:[true,'It should have a patient Id']
    }
},
{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

// Query Middlewares

// Middleware to populate reviews
reviewSchema.pre(/^find/,function(next){
    // this.populate({
    //     path:'patient',
    //     select:'username'
    // }).populate({
    //     path:'doctor',
    //     select:'username'
    // });
    this.populate({
        path:'patient',
        select:'username'
    });
    next();
})


const Review=mongoose.model('Review',reviewSchema)
module.exports=Review;
