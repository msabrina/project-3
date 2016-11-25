const bcrypt = require('bcrypt');
const db     = require('../db/db.js');
const auth   = require('../lib/auth.js');

const SALTROUNDS = 10;

function createApplicant (req, res, next) {
  const first = req.body.firstName;
  const last = req.body.lastName;
  const email = req.body.email.toLowerCase();
  const password = bcrypt.hashSync(req.body.password, SALTROUNDS);

  const query = `INSERT INTO applicant (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING applicant_id, fname, lname, email;`;

  const values = [
    first,
    last,
    email,
    password,
  ];

  db.one(query, values)
  .then((data) => {
    auth.getApplicantToken(data)
      .then((token) => res.rows = token)
      .then(() => next())
      .catch(err => next(err));
  });
}

function getApplicantData (req, res, next) {
  auth.getApplicantData(req.params.token)
  .then((data) => res.rows = data)
  .then(() => next())
  .catch(err => next(err));
}

function logIn (req, res, next) {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  const query = `SELECT * FROM applicant WHERE email = $1;`;
  const values = [email];

  db.oneOrNone(query, values)
  .then((data) => {
    if (!data) next(new Error('Invalid login credentials.'));

    if (bcrypt.compareSync(password, data.password)) {
      const applicantObj = {};
      for (let key in data) {
        if (key != 'password') applicantObj[key] = data[key];
      }
      // correct password
      auth.getApplicantToken(applicantObj)
      .then((token) => res.rows = token)
      .then(() => next())
      .catch(err => next(err));
    } else {
      next(new Error('Invalid login credentials.'));
    }
  })
  .catch(err => next(err));
}

module.exports = {
  createApplicant,
  getApplicantData,
  logIn,
}
