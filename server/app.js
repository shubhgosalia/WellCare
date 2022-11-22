const app = require("./index");
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});
const connectToMongo = require('./db');
connectToMongo();
const port = process.env.PORT || 3001;

process.on("unhandledRejection", (reason) => {
    console.log("error : ", reason.message);
    console.log("in the handler");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});