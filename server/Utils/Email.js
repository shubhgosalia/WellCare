const nodemailer = require("nodemailer");
const {ServerError} = require("./Errors");

const SendEmail = (options,next) => {
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
      throw new ServerError("Something went wrong!");
    } else {
      console.log("info : ",info);
    }
  });
};

module.exports = SendEmail;