const morgan = require("morgan");



morgan.token('id', (req, res)=>{
    return req.uuid;
})


//create morgan http log instance
const httpLogger = morgan(
    '[request] :id :method :url :status :res[content-length] - :response-time ms'
);

module.exports = {httpLogger}