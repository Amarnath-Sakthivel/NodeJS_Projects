


//error handling middleware
const errorHandlingMiddleware = (err, req, res, next) =>{

    const statusCode = err.status || 500;   //http status code

    const errMessage = err.message || 'something went wrong';   //custom error message

    res.status(statusCode).json({errorMessage : errMessage});
    
}

module.exports = {errorHandlingMiddleware}