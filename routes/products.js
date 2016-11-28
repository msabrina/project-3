const router       = require('express').Router();
const productModel = require('../models/product.js');
const auth         = require('../lib/auth.js');
const { getUserData } = require('../models/user.js');

const multer = require('multer');
const fs = require('fs');
const path = require('path');
const md5 = require('md5');

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     const newPath = `public/uploads/${req.generatedFileName || 'test'}`;
//     fs.access(newPath, fs.F_OK, (err) => {
//       if (err) {
//         fs.mkdirSync(newPath);
//       }
//       callback(null, newPath);
//       // callback(null, `public/uploads`);
//     });
//   },
//   filename: (req, file, callback) => {
//     const extension = path.extname(file.originalname);
//     const newName = `${req.generatedFileName || 'test'}-${Date.now()}.${extension}`;
//     callback(null, newName)
//   },
// });

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const tempPath = `public/uploads/temp/`;
    callback(null, tempPath);
  },
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname);
    const title = req.body.title.toLowerCase();
    const userID = req.userInfo.user_id;
    const hash = md5(`${userID}-${title}`);
    const newName = `${hash}-${file.fieldname}${extension}`;
    callback(null, newName);
  },
});

const upload = multer({ storage: storage });
// const upload = multer({ dest: 'public/uploads/temp' });

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

const fields = [
  { name: 'title', maxcount: 1 },
  { name: 'description', maxcount: 1 },
  { name: 'price', maxcount: 1 },
  { name: 'image-1', maxcount: 1 },
  { name: 'image-2', maxcount: 1 },
  { name: 'image-3', maxcount: 1 },
  { name: 'image-4', maxcount: 1 },
  { name: 'image-5', maxcount: 1 },
]

router.route('/:id')
  .get(auth.authenticateUser, productModel.getOneProduct, productModel.getOneProductImages, sendAsJSON)
  .put(auth.authenticateUser, productModel.editProduct, sendAsJSON)
  .delete(auth.authenticateUser, productModel.deleteProduct, sendAsJSON);

router.route('/')
  .get(productModel.getAllProducts, sendAsJSON)
  .post(auth.authenticateUser, productModel.getUserData, upload.fields(fields), productModel.createProduct, productModel.generateFilePrefix, productModel.createImages, sendAsJSON);

module.exports = router;
