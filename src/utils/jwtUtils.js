const jwt = require("jsonwebtoken");
const process = require("process");

const generateToken = (payload) => {
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error("Secret key is not defined");
  }
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error("Secret key is not defined");
  }
  return jwt.verify(token, secretKey);
};

module.exports = { generateToken, verifyToken };
