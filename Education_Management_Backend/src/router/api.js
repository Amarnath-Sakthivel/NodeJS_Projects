const authorizeUser = require('../controller/auth');
const { createUser, fetchAllUser } = require('../controller/userModel');
const { errorHandlingMiddleware } = require('../middleware/errorHandler');

const router = require('express').Router();






//routes
router.use(authorizeUser)
router.post('/register', createUser)
router.get('/allUser',fetchAllUser)
router.use(errorHandlingMiddleware)




module.exports = router;