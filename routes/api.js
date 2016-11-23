const router    = require('express').Router();
const userModel = require('../models/user.js');
const auth      = require('../lib/auth.js');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/users/:id/login')
  .get(userModel.logIn, sendAsJSON)

router.route('/users/:token')
  .get(userModel.getUserData, sendAsJSON)
  .delete(sendAsJSON);

router.route('/users')
  .post(userModel.createUser, sendAsJSON);

module.exports = router;
