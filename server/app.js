//requiring the main file which consists of all the routes of the application
const app = require("./index");
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});
const connectToMongo = require('./db');
//connecting to the database
connectToMongo();
const port = process.env.PORT || 3001;

process.on("unhandledRejection", (reason) => {
  console.log("error : ", reason.message);
  console.log("in the handler");
});

//listening to the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
