// connecting to db
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URL;

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(()=> console.log("Connected to mongo succesfully!"))
    .catch((err) => {
      console.log("Error!: ",err);
    });
};

module.exports = connectToMongo;
