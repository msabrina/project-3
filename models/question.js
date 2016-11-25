const db = require('../db/db.js');

function getQuestions (req, res, next) {
  const query = `SELECT * FROM question;`;

  db.any(query)
  .then(questions => res.rows = questions)
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getQuestions,
}
