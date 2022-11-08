const connectToMongo = require('./db');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});
connectToMongo();
const app = express();
const port = process.env.PORT || 3001;

process.on("unhandledRejection", (reason) => {
    console.log("error : ", reason.message);
    console.log("in the handler");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});