const db = require('../db/db.js');
const jwt = require('jsonwebtoken');

const SECRET_APPROVED = process.env.SECRET_APPROVED;
const SECRET_APPLICANT = process.env.SECRET_APPLICANT;

function getUserToken (user) {
  return new Promise((resolve, reject) => {
    jwt.sign({ data: user }, SECRET_APPROVED, { expiresIn: '1h' }, (err, token) => {
      if (err) return reject(err);
      resolve(token);
    });
  });
}

function getUserData (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_APPROVED, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    });
  });
}

function getApplicantToken (user) {
  return new Promise((resolve, reject) => {
    jwt.sign({ data: user }, SECRET_APPLICANT, { expiresIn: '1h' }, (err, token) => {
      if (err) return reject(err);
      resolve(token);
    });
  });
}

function getApplicantData (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_APPLICANT, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    });
  });
}

function authenticateUser (req, res, next) {
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  jwt.verify(token, SECRET_APPROVED, (err, decoded) => {
      if (err) return next(err);
      next();
  });
}

function authenticateApplicant (req, res, next) {
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  jwt.verify(token, SECRET_APPLICANT, (err, decoded) => {
      if (err) return next(err);
      next();
  });
}

module.exports = {
  getUserToken,
  getUserData,
  getApplicantToken,
  getApplicantData,
  authenticateUser,
  authenticateApplicant,
}
