const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URL;
const connectToMongo = async () => {
    try{
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("database connected successfully");
    }catch(err){
        console.log("Sorry,database did not connect :((");
        console.log("err : ",err);
}
}

module.exports = connectToMongo;