const db = require('../db/db.js');
const bcrypt = require('bcrypt');

const SALTROUNDS = 10;

function createUser (req, res, next) {
  const first = req.body.firstName;
  const last = req.body.lastName;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, SALTROUNDS);

  const query = `INSERT INTO "user" (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING *;`;

  const values = [
    first,
    last,
    email,
    password,
  ];

  console.log(values);
  db.one(query, values)
  .then((data) => res.rows = data)
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  createUser,
}
