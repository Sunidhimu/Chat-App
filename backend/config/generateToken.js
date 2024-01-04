const jwt = require("jsonwebtoken");

// Define a function to generate a JWT token with an expiration of 30 days
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
