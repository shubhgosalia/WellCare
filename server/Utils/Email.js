const nodemailer = require("nodemailer");

const {ServerError} = require("./Errors");

//sending mail to the client
const SendEmail = (options,next) => {
  return new Promise((resolve,reject)=>{
    console.log(process.env.MAIL_USERNAME)
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: options.to,
      subject: options.subject,
      html: options.html,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error in nodemailer : ",error);
        reject(new ServerError("Something went wrong!"));
      } else {
        console.log("info : ",info);
        resolve();
      }
    });
  });
};

module.exports = SendEmail;