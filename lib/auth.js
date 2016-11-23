const db = require('../db/db.js');
const jwt = require('jsonwebtoken');

const SECRET = 'qualityFurniture*1000';

function getUserToken (user) {
  console.log(user);
  return new Promise((resolve, reject) => {
    jwt.sign({ data: user }, SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) return reject(err);
      resolve(token);
    });
  });
}

function getUserData (token) {
  console.log(token)
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    });
  });
}

function authenticate (req, res, next) {
  const token = req.params.token;
  jwt.verify(token, SECRET, (err, decoded) => {
      if (err) return next(err);
      next();
  });
}

module.exports = {
  getUserToken,
  getUserData,
  authenticate,
}
