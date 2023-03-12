const authorizeUser = require('../controller/auth');
const { createUser, fetchAllUser, fetchUserByID } = require('../controller/userModel');
const { errorHandlingMiddleware } = require('../middleware/errorHandler');

const router = require('express').Router();






//routes
router.use(authorizeUser)
router.post('/signup', createUser)
router.get('/users',fetchAllUser)
router.get('/user', fetchUserByID);
router.use(errorHandlingMiddleware)




module.exports = router;