// connecting to db
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/wellcare";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, () => {
      console.log("Connected to mongo succesfully!");
    })
    .catch((err) => {
      console.log("Error!");
    });
};

module.exports = connectToMongo;
