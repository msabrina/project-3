const router = require('express').Router();
const userModel = require('../models/user.js');

function sendAsJSON (req, res, next) {
  // res.json({message: 'works'});
  res.json(res.rows);
}
router.route('/users')
  .get(sendAsJSON)
  .post(userModel.createUser, sendAsJSON);

module.exports = router;
