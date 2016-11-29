const router         = require('express').Router();
const userModel      = require('../models/user.js');
const questionModel  = require('../models/question.js');
const auth           = require('../lib/auth.js');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/survey')
  .get(questionModel.getQuestions, questionModel.shuffleQuestions, sendAsJSON)
  .post(questionModel.saveAnswers, questionModel.checkAnswers, questionModel.getTempID, questionModel.storeTempID, sendAsJSON);

router.route('/login')
  .post(userModel.logIn, sendAsJSON);

router.route('/')
  .get(auth.authenticateUser, userModel.getUserData, userModel.getUserPosts, userModel.getUserWatches, userModel.prepareResponse, sendAsJSON)
  .post(userModel.createUser, sendAsJSON)
  .put(auth.authenticateUser, userModel.getUserData, userModel.updateUser, sendAsJSON)
  .delete(auth.authenticateUser, userModel.deleteUser, sendAsJSON);

module.exports = router;
