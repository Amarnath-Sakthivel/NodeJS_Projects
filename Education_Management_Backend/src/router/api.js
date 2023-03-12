const authorizeUser = require('../controller/auth');
const { errorHandlingMiddleware } = require('../middleware/errorHandler');

const router = require('express').Router();






router.use('/login',authorizeUser)
router.use(errorHandlingMiddleware)
module.exports = router;