const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URL;
// const mongoURI = process.env.MONGODB_ATLAS_URL;
//connecting to the database
const connectToMongo = () => {
  try {
    mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected successfully");
  } catch (err) {
    console.log("Sorry,database did not connect :((");
    console.log("err : ", err);
  }
};

module.exports = connectToMongo;

