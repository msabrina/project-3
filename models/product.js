const db   = require('../db/db.js');
const auth = require('../lib/auth.js');

const md5 = require('md5');
const fs = require('fs');
const path = require('path');

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

function getNextPostID (req, res, next) {
  const query = `SELECT nextval('post_post_id_seq');`;
  db.one(query)
  .then((num) => req.nextNum = num)
  .then(() => next())
  .catch(err => next(err));
}

function getUserData (req, res, next) {
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  auth.getUserData(token)
  .then((user) => {
    req.userInfo = user.data
    res.userData = user.data
  })
  .then(() => next())
  .catch(err => next(err));
}

function createProduct (req, res, next) {
  console.log(res.userInfo)
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const user_id = res.userData.user_id;
  const imageCount = Object.keys(req.files).length;

  const queryOne = `
    INSERT INTO post
      (title, description, price, image_count, user_id)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const queryTwo = `
    INSERT INTO user_post_ref
      (user_id, post_id)
    VALUES
      ($5, $6)
    ;
  `;

  const values = [
    title,
    description,
    price,
    imageCount,
    user_id,
  ];

  db.one(queryOne, values)
  .then((inserted) => {
    res.insertedPost = inserted;
    values.push(parseInt(inserted.post_id));
    db.none(queryTwo, values)
    .then(() => next())
    .catch(err => next(err));
  })
  .catch(err => next(err));
}

function generateFileNames (req, res, next) {
  const post = res.insertedPost;
  const user = res.userData;
  const hash = md5(`${post.post_id}-${user.user_id}`);
  res.generatedFilePrefix = hash;
  next();
}

function createImages (req, res, next) {
  const uploadPath = `public/uploads/temp/`;
  const post = res.insertedPost;
  const user = res.userData;
  const hash = md5(`${user.userID}-${post.title.toLowerCase()}`);
  for (let fileKey in req.files) {
    AWSService.uploadFile(fileKey, req.files[fileKey], res.generatedFilePrefix)
  }
  next();
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
  getNextPostID,
  getUserData,
  createProduct,
  generateFileNames,
  createImages,
  editProduct,
  deleteProduct,
}
