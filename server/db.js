const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URL;
const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    () => {
        console.log("Connected to Mongo Successfully");
    });
}

mongoose.connection.on('error',(err)=>{
    console.log("cannot connect to the database :(");
    console.log("Database Connection Error : ",err);
  });
  

module.exports = connectToMongo;