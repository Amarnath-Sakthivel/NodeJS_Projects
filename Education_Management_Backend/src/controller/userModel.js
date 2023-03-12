const mysql = require("mysql");
const config = require("../lib/config");
const { dbConnection, dbTableConfig } = require("../lib/dbconnect");


//insert user data into database
const createUser = (req, res, next) => {
  console.log("create new user in database");
  var sql = `INSERT INTO student (username, password) VALUES ('${req.headers.username}','${req.headers.password}')`;
  dbConnection().query(sql, function (err, result) {
    if (err) next(err)
    res.json({ message: "data inserted" });
  });
};


//fetch all user from database
const fetchAllUser = async (req, res, next) => {
  dbConnection().query("SELECT * FROM student", function (err, result) {
    if (err) next(err)
    res.json({ users: result });
  });
};

module.exports = { createUser, fetchAllUser };
