
const {v4: uuidv4} = require('uuid');


//set uuid each request
const uuid = (req, res,next) =>{
    req.uuid = uuidv4();
    next()
}

module.exports = uuid