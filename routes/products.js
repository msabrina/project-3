const router       = require('express').Router();
const productModel = require('../models/product.js');
const auth         = require('../lib/auth.js');

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
    const title = req.body.title;
    const hash = md5(title);
    const tempPath = `public/uploads/temp/`;
    const newPath = `public/uploads/${hash}/`;
    fs.access(newPath, fs.F_OK, (err) => {
      if (err) {
        fs.mkdirSync(newPath);
      }
      callback(null, newPath);
      // callback(null, `public/uploads`);
    });
  },
  filename: (req, file, callback) => {
    console.log(file)
    const extension = path.extname(file.originalname);
    const title = req.body.title.toLowerCase();
    const hash = md5(title);
    const newName = `${file.fieldname}${extension}`;
    callback(null, newName)
  },
});

const upload = multer({ storage: storage });
// const upload = multer({ dest: 'public/uploads/temp' });

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

const fields = [
  { name: 'title', maccount: 1 },
  { name: 'description', maccount: 1 },
  { name: 'price', maccount: 1 },
  { name: 'image-1', maccount: 1 },
  { name: 'image-2', maccount: 1 },
  { name: 'image-3', maccount: 1 },
  { name: 'image-4', maccount: 1 },
  { name: 'image-5', maccount: 1 },
]

router.route('/:id')
  .get(auth.authenticateUser, productModel.getOneProduct, productModel.getOneProductImages, sendAsJSON)
  .put(auth.authenticateUser, productModel.editProduct, sendAsJSON)
  .delete(auth.authenticateUser, productModel.deleteProduct, sendAsJSON);

router.route('/')
  .get(productModel.getAllProducts, sendAsJSON)
  .post(auth.authenticateUser, upload.fields(fields), productModel.createProduct, productModel.generateFileNames, productModel.createImages, sendAsJSON);

module.exports = router;
