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

// TODO: get rid of this route; this is just for testing
router.route('/:token')
  .get(auth.authenticateUser, userModel.getUserData, userModel.getUserPosts, userModel.getUserWatches, userModel.prepareResponse, sendAsJSON);

router.route('/')
  .get(auth.authenticateUser, userModel.getUserData, sendAsJSON)
  .post(userModel.createUser, sendAsJSON)
  .put(sendAsJSON)
  .delete(sendAsJSON);

module.exports = router;
