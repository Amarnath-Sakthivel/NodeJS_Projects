const mysql = require("mysql");
const config = require("./config");

/**
 *
 * @returns database configuration
 *
 *
 *
 */
const dbConnection = () => {
  const con = mysql.createConnection({
    host: config.dbHost,
    user: config.dbAdminUser,
    password: config.dbUserAdminPass,
    database: config.dbSchema,
  });
  return con;
};

/**
 *
 * Create database and table if not exists
 *
 */
const con = mysql.createConnection({
  host: config.dbHost,
  user: config.dbAdminUser,
  password: config.dbUserAdminPass,
});
con.connect(function (err) {
  if (err) throw err;
  con.query(
    `CREATE DATABASE IF NOT EXISTS ${config.dbSchema}`,
    function (err, result) {
      if (err) next(err);
      console.log(`Database connected successfully.....`);
      var sql =
        "CREATE TABLE IF NOT EXISTS student (username VARCHAR(255), password VARCHAR(255))";
      dbConnection().query(sql, function (err, _result) {
        if (err) next(err);
        console.log("Table created");
      });
    }
  );
});

module.exports = { con, dbConnection };
