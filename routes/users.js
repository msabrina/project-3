const router    = require('express').Router();
const userModel = require('../models/user.js');
const auth      = require('../lib/auth.js');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/login')
  .post(userModel.logIn, sendAsJSON);

router.route('/:token')
  .get(auth.authenticate, userModel.getUserData, sendAsJSON)
  .put(sendAsJSON)
  .delete(sendAsJSON);

router.route('/')
  .post(userModel.createUser, sendAsJSON);

module.exports = router;
