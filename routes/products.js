const router       = require('express').Router();
const productModel = require('../models/product.js');
const auth         = require('../lib/auth.js');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/:id')
  .get(productModel.getOneProduct, sendAsJSON)
  .put(sendAsJSON)
  .delete(sendAsJSON);

router.route('/')
  .get(productModel.getAllProducts, sendAsJSON)
  .post(productModel.createProduct, sendAsJSON);

module.exports = router;
