const db         = require('../lib/db.js');
const auth       = require('../lib/auth.js');
const CloudinaryService = require('../services/cloudinary.js');

const md5  = require('md5');
const fs   = require('fs');
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

function generateFilePrefix (req, res, next) {
  const post = res.insertedPost;
  const user = res.userData;
  const hash = md5(`${post.post_id}-${user.user_id}`);
  res.generatedFilePrefix = hash;
  next();
}

function createImages (req, res, next) {
  const post = res.insertedPost;
  let allLocalImagePaths = [];
  const filePrefix = res.generatedFilePrefix;
  for (let fileKey in req.files) {
    let file = req.files[fileKey][0];
    let oldPath = file.path;
    let newPath = `${file.destination}${filePrefix}-${file.fieldname}${path.extname(file.originalname)}`;
    fs.renameSync(oldPath, newPath)
    allLocalImagePaths.push(path.join(__dirname, `../${newPath}`));
  }

  Promise.all(allLocalImagePaths.map((path) => {
    return CloudinaryService.uploadImage(path).catch(err => err);
  }))
  .then((data) => {
    db.tx(t => {
      const queryOne = `INSERT INTO image (title, alt_text, url) VALUES ($1, $1, $2) RETURNING *;`;
      const queryTwo = `INSERT INTO image_post_ref (post_id, image_id) VALUES ($1, $2);`;

      data.forEach((result) => {
        let valuesOne = [
          post.title,
          result.url,
        ];
        return t.one(queryOne, valuesOne)
          .then((insertedImage) => {
              const valuesTwo = [
                post.post_id,
                insertedImage.image_id,
              ];
              return t.none(queryTwo, valuesTwo);
          })
          .catch(err => next(err));
        });
    })
    .then(() => next())
    .catch(err => next(err));
    res.rows = data;
  })
  .catch(err => next(err));
}

function editProduct (req, res, next) {
  const postID = req.params.id;
  let query = `UPDATE post SET `;
  let params = [req.body.title, req.body.description, req.body.price];
  let columns = ['title', 'description', 'price'];
  let values = [];

  params.forEach((val, i) => {
    if (val) {
      values.push(params[i])
      query += `${columns[i]} = $${values.length}, `
    }
  });
  query = query.slice(0, -2);
  query += ` WHERE post_id = $${values.length + 1} RETURNING *;`;
  values.push(postID);

  // execute query with the data...
  db.one(query, values)
  .then((data) => res.rows = data)
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
  generateFilePrefix,
  createImages,
  editProduct,
  deleteProduct,
}
