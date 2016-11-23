const db   = require('../db/db.js');
const auth = require('../lib/auth.js');

function getAllProducts (req, res, next) {
  const query = `SELECT * FROM post;`;

  db.any(query)
  .then((data) => res.rows = data)
  .then(() => next())
  .catch(err => next(err));
}

function getOneProduct (req, res, next) {
  const prod_id = req.params.id;

  const query = `SELECT * FROM post WHERE post_id = $1;`;
  const values = [prod_id];

  db.oneOrNone(query, values)
  .then((data) => res.rows = data)
  .then(() => next())
  .catch(err => next(err));
}

function createProduct (req, res, next) {
  const title = req.body.title;
  const description = req.body.description;
  const token = req.headers['token-authorization'] || req.body.token || req.params.token || req.query.token;
  let user_id = null;
  auth.getUserData(token)
  .then((user) => {
    user_id = user.data.user_id;
  })
  .then(() => {
    const query = `INSERT INTO post (title, description, user_id) VALUES ($1, $2, $3) RETURNING *;`;
    const values = [
      title,
      description,
      user_id,
    ];

    db.oneOrNone(query, values)
    .then((data) => res.rows = data)
    .then(() => next())
    .catch(err => next(err));
  })
  .catch(err => next(err));
}

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
}
