require("dotenv").config();

//fetch env_variables from .env if exists, else return default value
const config = {};

config.port = process.env.PORT || 8080; // default port
config.technicalUser = process.env.TECHNICAL_USER || ""; // technical username
config.technicalUserPass = process.env.TECHNICAL_USER_PASS || ""; //technicalusername pass

module.exports = config;
