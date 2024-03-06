const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateEmailVerifyToken = (email) => {
  try {
    const emailVerifyToken = jwt.sign(
      { email },
      process.env.EMAIL_VERIFY_TOKEN_SECRET_KEY,
      {
        expiresIn: process.env.EMAIL_VERIFY_TOKEN_EXPIRATION,
      }
    );
    return emailVerifyToken;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = generateEmailVerifyToken;