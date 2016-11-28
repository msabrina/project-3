const router       = require('express').Router();
const productModel = require('../models/product.js');
const auth         = require('../lib/auth.js');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/:id')
  .get(auth.authenticateUser, productModel.getOneProduct, productModel.getOneProductImages, sendAsJSON)
  .put(auth.authenticateUser, productModel.editProduct, sendAsJSON)
  .delete(auth.authenticateUser, productModel.deleteProduct, sendAsJSON);

router.route('/')
  .get(productModel.getAllProducts, sendAsJSON)
  .post(auth.authenticateUser, productModel.createProduct, sendAsJSON);

module.exports = router;
