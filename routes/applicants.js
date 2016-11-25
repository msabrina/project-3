const router         = require('express').Router();
const applicantModel = require('../models/applicant.js');
const auth           = require('../lib/auth.js');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/login')
  .post(applicantModel.logIn, sendAsJSON);

router.route('/:token')
  .get(auth.authenticateApplicant, applicantModel.getApplicantData, sendAsJSON)
  .put(sendAsJSON)
  .delete(sendAsJSON);

router.route('/')
  .post(applicantModel.createApplicant, sendAsJSON);

module.exports = router;
