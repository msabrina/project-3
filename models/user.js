const bcrypt = require('bcrypt');
const db     = require('../db/db.js');
const auth   = require('../lib/auth.js');

const SALTROUNDS = 10;

function createUser (req, res, next) {
  const first = req.body.firstName;
  const last = req.body.lastName;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, SALTROUNDS);

  const query = `INSERT INTO "user" (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING fname, lname, email;`;

  const values = [
    first,
    last,
    email,
    password,
  ];

  console.log(values);
  db.one(query, values)
  .then((data) => {
    console.log(data)
    auth.getUserToken(data)
      .then((token) => res.rows = token)
      .then(() => next())
      .catch(err => next(err));
  });
}

function getUserData (req, res, next) {
  auth.getUserData(req.params.token)
  .then((data) => res.rows = data)
  .then(() => next())
  .catch(err => next(err));
}

function logIn (req, res, next) {
  const id = req.params.id;
  const query = `SELECT fname, lname, email FROM "user" WHERE user_id = $1;`;
  const values = [id];

  db.oneOrNone(query, values)
  .then((data) => auth.getUserToken(data))
  .then((token) => res.rows = token)
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  createUser,
  getUserData,
  logIn,
}
