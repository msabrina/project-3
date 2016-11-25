const router          = require('express').Router();
const usersRouter     = require('./users.js');
const productsRouter  = require('./products.js');
const questionsRouter = require('./questions.js');

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/questions', questionsRouter);

module.exports = router;
