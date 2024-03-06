const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    // auth: {
    //   user: process.env.SMTP_USERNAME, // Corrected here
    //   pass: process.env.SMTP_PASSWORD, // Corrected here
    // },
    providerauth: {user: process.env.SMTP_USERNAME}, // user -> important
    pass: process.env.SMTP_PASSWORD // pass -> important (do not use password)
  });

  const mailOptions = {
    from: process.env.SMTP_USERNAME,
    to: options.email,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error occurred while sending email:", error.message);
    throw error; // Rethrow the error if necessary
  }
};

module.exports = sendEmail;
