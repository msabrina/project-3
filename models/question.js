const db   = require('../db/db.js');
const auth = require('../lib/auth.js');

const SALTROUNDS = 10;

function createTempUser (req, res, next) {
  const first = req.body.firstName;
  const last = req.body.lastName;
  const email = req.body.email.toLowerCase();
  const password = bcrypt.hashSync(req.body.password, SALTROUNDS);

  const query = `INSERT INTO unapproved_user (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING user_id, fname, lname, email;`;

  const values = [
    first,
    last,
    email,
    password,
  ];

  db.one(query, values)
  .then((data) => {
    auth.getUserToken(data)
      .then((token) => res.rows = token)
      .then(() => next())
      .catch(err => next(err));
  })
  .catch(err => next(err));
}

function getQuestion (req, res, next) {
  const num = parseInt(req.params.num);
  if (!num) next(new Error('Invalid question number'));

  const query = `SELECT * FROM question WHERE question_num = $1;`;
  const values = [num];

  db.oneOrNone(query, values)
  .then(question => res.question = question)
  .then(() => next())
  .catch(err => next(err));
}

function prepareResponse (req, res, next) {
  const num = parseInt(req.params.num);
  const question = res.question;

  const nextURL = num == 10 ? `/api/v1/check` : `/api/v1/questions/${num + 1}`;
  const resJSON = {
    question: question,
    nextURL: nextURL,
  };
  res.rows = resJSON;
  next();
}

module.exports = {
  createTempUser,
  getQuestion,
  prepareResponse,
}
