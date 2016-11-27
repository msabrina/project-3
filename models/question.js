const db = require('../db/db.js');

const scoreThreshold = 7;

function isValidEmail (email) {
  // regex for testing an email obtained from http://www.regular-expressions.info/email.html on 11/25/2016
  // allows for all valid emails - including those on subdomains of subdomains, up to the maximum SMTP supports
  // for more info, see above article
  const emailRegex = new RegExp(/^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
  // more basic regex obtained from the same article as the previous one
  // const emailRegex = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return emailRegex.test(email);
}

function getQuestions (req, res, next) {
  const query = `SELECT * FROM question;`;

  db.any(query)
  .then(questions => res.questions = questions)
  .then(() => next())
  .catch(err => next(err));
}

function shuffleQuestions (req, res, next) {
  const sorted = res.questions;
  res.rows = sorted;
  next();
}

function checkIfTooSoon (req, res, next) {
  const email = req.body.email;
  // check the email address
  if (!isValidEmail(email)) next(new Error('Please submit a valid email address.'));

  const query = `SELECT email, submit_date FROM survey_response WHERE email = $1 ORDER BY submit_date DESC;`;
  const values = [email];

  db.any(query, values)
  .then((data) => {
    // if there are no entries then this is a brand new user, so they're good to go
    if (!data) next();
    // otherwise, we need to check the date of the most recent submission against the current date
    const currentDate = Date.now(); // TODO: make this be 7 days ago from now
    if (data[0].submit_date - currentDate <= 7) next(new Error('You must wait 7 days betweeen submissionsn attempts.'));
    // if we've reached this point, the user is allowed to submit, so move them forward
    next();
  })
}

function saveAnswers (req, res, next) {
  // don't need to check the validity of the email because checkIfTooSoon already checked it #DRY
  const email = req.body.email;
  // req.body.answers is an object
  const answers = req.body.answers;

  // email is good; create an empty array to hold the responses
  let values = [];

  // 10 questions; so we want to iterate through them
  for (let i = 1; i <= 10; i++) {
    // check that each question has a valid choice
    // make sure that each answer exists, and that it's a number between 1 and 4 (inclusive); otherwise throw an error
    if (!(answers[i] || (parseInt(answers[i]) < 1 || parseInt(answers[i] > 4)))) {
      next(new Error('Please submit an answer to every question and try again.'));
    }
    // if the answer exists, push it onto the values array. since we're incrementing i, the values will always be in order.
    values.push(answers[i]);
  }

  // if we've reached this point, values has 10 answers in it, in order of question numbers. now we need to push the email
  values.push(email);

  // build the query string
  const query = `INSERT INTO survey_response (q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;`;

  // ready to insert!
  db.oneOrNone(query, values)
  .then(data => res.valuesArray = values)
  .then(() => next())
  .catch(err => next(err));
}

function checkAnswers (req, res, next) {
  const userAnswers = res.valuesArray;

  const query = `SELECT * FROM answers ORDER BY question_num ASC;`;

  let score = 0;

  db.any(query)
  .then((data) => {
    data.forEach((answer, i) => {
      if (userAnswers[i] == answer.correct_answer) score++;
      if (score >= scoreThreshold) {
        res.rows = {
          status: 'approved',
          status_code: 1,
        };
      }
      else {
        res.rows = {
          status: 'denied',
          status_code: 0,
        };
      }
    });
    next();
  })
  .catch(err => next(err));
}

function getTempID (req, res, next) {
  if (res.rows.status_code == 0) {
    res.rows.temp_id = null;
    next();
  }

  if (res.rows.status_code == 1) {
    const query = `SELECT * FROM approved_emails;`;
    db.any(query)
    .then((users) => {
      let newID = Math.floor(Math.random() * 1000000);
      let isValid = false;
      while (!isValid) {
        isValid = true;
        users.forEach((user) => {
          if (user.temp_id == newID) {
            isValid = false;
          }
        });
        newID = Math.floor(Math.random() * 1000000);
      }
      res.rows.temp_id = newID;
      res.rows.email = req.body.email;
      next();
    })
    .catch(err => next(err));
  }
}

function storeTempID (req, res, next) {
  const query = `INSERT INTO approved_emails (temp_id, email) VALUES ($1, $2) RETURNING *;`;

  const values = [
    res.rows.temp_id,
    res.rows.email,
  ];

  db.oneOrNone(query, values)
  .then((data) => console.log(data))
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getQuestions,
  shuffleQuestions,
  checkIfTooSoon,
  saveAnswers,
  checkAnswers,
  getTempID,
  storeTempID,
}
