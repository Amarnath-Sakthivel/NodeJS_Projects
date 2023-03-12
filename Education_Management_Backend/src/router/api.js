const authorizeUser = require('../controller/auth');
const { createUser, fetchAllUser, fetchUserByID, isValidUser } = require('../controller/userModel');
const { errorHandlingMiddleware } = require('../middleware/errorHandler');

const router = require('express').Router();






//routes
router.use(authorizeUser)
router.post('/signup', createUser)
router.get('/signin', isValidUser)
router.get('/users',fetchAllUser)
router.get('/user', fetchUserByID);
router.use(errorHandlingMiddleware)




module.exports = router;