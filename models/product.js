const db   = require('../db/db.js');
const auth = require('../lib/auth.js');

function getAllProducts (req, res, next) {
  const firstQuery = `SELECT * FROM post;`;
  const secondQuery = `SELECT * FROM image INNER JOIN image_post_ref ON image.image_id = image_post_ref.image_id WHERE image_post_ref.post_id = $1;`;

  // found this little gem on SO: http://stackoverflow.com/a/39807816
  db.task((t) => {
    return t.map(firstQuery, [], post => {
        return t.any(secondQuery, post.post_id)
            .then(images => {
                post.images = images;
                return post;
            });
    }).then(t.batch);
  })
  .then((products) => {
      res.rows = products;
      next();
  })
  .catch(err => next(err));
}

function getOneProduct (req, res, next) {
  const prod_id = req.params.id;

  const query = `SELECT * FROM post WHERE post_id = $1;`;
  const values = [prod_id];

  db.oneOrNone(query, values)
  .then((product) => res.rows = product)
  .then(() => next())
  .catch(err => next(err));
}

function getOneProductImages (req, res, next) {
  const prod_id = req.params.id;

  const query = `SELECT * FROM image I INNER JOIN image_post_ref R ON I.image_id = R.image_id WHERE R.post_id = $1;`;
  const values = [prod_id];

  db.any(query, values)
  .then((images) => res.rows.images = images)
  .then(() => next())
  .catch(err => next(err));
}

function createProduct (req, res, next) {
  const title = req.body.title;
  const description = req.body.description;
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  let user_id = null;
  auth.getUserData(token)
  .then((user) => {
    user_id = user.data.user_id;
  })
  .then(() => {
    const queryOne = `
      INSERT INTO post
        (title, description, user_id)
      VALUES
        ($1, $2, $3)
      RETURNING post_id;
    `;

    const queryTwo = `
      INSERT INTO user_post_ref
        (user_id, post_id)
      VALUES
        ($3, $4)
      ;
    `;

    const values = [
      title,
      description,
      user_id,
    ];

    db.one(queryOne, values)
    .then((inserted) => {
      values.push(parseInt(inserted.post_id));
      db.none(queryTwo, values)
      .then(() => next())
      .catch(err => next(err));
    })
    .catch(err => next(err));
  })
  .catch(err => next(err));
}

function editProduct (req, res, next) {
  const prod_id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;

  const query = `UPDATE post SET title = $2, description = $3 WHERE post_id = $1 RETURNING *;`;
  const values = [
    prod_id,
    title,
    description,
  ];

  db.one(query, values)
  .then((data) => res.rows = data || 'yup')
  .then(() => next())
  .catch(err => next(err));
}

function deleteProduct (req, res, next) {
  const post_id = req.params.id;

  const query = `DELETE FROM user_post_ref WHERE post_id = $1; DELETE FROM post WHERE post_id = $1;`;
  const values = [post_id];

  db.none(query, values)
  .then(() => res.rows = 'Succesfully Deleted')
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getAllProducts,
  getOneProduct,
  getOneProductImages,
  createProduct,
  editProduct,
  deleteProduct,
}
