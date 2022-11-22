const express = require('express');
const { NotFoundError } = require('./Utils/Errors');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
// const cookieParser = require('cookie-parser');

//middlewares
app.use(helmet());
app.use(cors({
   origin: ['http://localhost:3000'],
   credentials: true,
}));

// app.use(cookieParser());
app.use((_req,_res,next)=>{
    if(process.env.ENV == 'development'){
        console.log("in the development mode....");
    }
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//API 
app.use((_req,_res,next)=>{
   console.log("heyyy");
   next();
});

app.use("/patient",require("./routes/Patient"));

//request for serving the favicon
app.get("/favicon.ico",(req,res)=>{
   return res.sendStatus(204);
});

app.all("*",(req,_res,next)=>{
   console.log("path : ",req.originalUrl);
   console.log(new NotFoundError("Sorry,this page does not exists").stack);
   return next(new NotFoundError("Sorry,this page does not exists"));
});


//global error middleware
app.use((error,_req,res,_)=>{
   console.log("entered the global error middleware...");
   let err = {...error};
   
   err.statusCode = err.statusCode || 500;
   err.msg = err.statusCode == 500 ? 'Sorry,something went wrong!' : err.msg;
   
   console.log('Error : ', err);
   //sending the error response
   res.status(err.statusCode).json({
    status : "Failed",
    error : err.msg,
    name : err.name
   });
});

module.exports = app;
