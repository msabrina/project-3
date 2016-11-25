const router        = require('express').Router();
const questionModel = require('../models/question.js');
const auth          = require('../lib/auth.js');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/:num')
  .get(questionModel.getQuestion, questionModel.prepareResponse, sendAsJSON);

router.route('/')
  .get((req, res) => res.redirect('/api/v1/questions/1'))
  .post(questionModel.createTempUser, sendAsJSON);

module.exports = router;
