require("dotenv").config();

//fetch env_variables from .env if exists, else return default value
const config = {};

config.port = process.env.PORT || 8080; // default port
config.technicalUser = process.env.TECHNICAL_USER || ""; // technical username
config.technicalUserPass = process.env.TECHNICAL_USER_PASS || ""; //technicalusername pass
config.dbHost = process.env.DB_HOST || 'localhost';
config.dbAdminUser = process.env.DB_ADMIN_USERNAME;
config.dbUserAdminPass = process.env.DB_ADMIN_PASSWORD;
config.dbSchema = process.env.DB_SCHEMA


module.exports = config;
