const router       = require('express').Router();
const productModel = require('../models/product.js');
const auth         = require('../lib/auth.js');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/:id')
  .get(auth.authenticate, productModel.getOneProduct, sendAsJSON)
  .put(auth.authenticate, productModel.editProduct, sendAsJSON)
  .delete(auth.authenticate, productModel.deleteProduct, sendAsJSON);

router.route('/')
  .get(productModel.getAllProducts, sendAsJSON)
  .post(auth.authenticate, productModel.createProduct, sendAsJSON);

module.exports = router;
