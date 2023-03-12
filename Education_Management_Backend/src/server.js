const express = require("express");
const morgan = require("morgan");
const config = require("./lib/config");
const { httpLogger } = require("./middleware/httpLogger");
const uuid = require("./middleware/requestID");
const route = require("./router/api");
require('./lib/dbconnect')


const app = express();

//intialize port
const PORT = config.port;



//middlewares
app.use(uuid); // set requestID
app.use(httpLogger); //Http logger
app.use("/api", route); //api

//start the server
const server = app.listen(PORT, () => {
  console.log(`Server up and running on PORT# ${PORT}`);
});

module.exports = server;
