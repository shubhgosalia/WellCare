const mongoose = require('mongoose');
const reviewSchema=new mongoose.Schema({
    text:{
        type:String,
        required:[true,'It should have body']
    },
    // patient_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'Patient'
    // },
    // doctor_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'Doctor'
    // }
})
const Review=mongoose.model('Review',reviewSchema)

module.exports=Review;