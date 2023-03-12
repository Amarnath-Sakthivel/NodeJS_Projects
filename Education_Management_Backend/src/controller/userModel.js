const mysql = require("mysql");
const config = require("../lib/config");
const { dbConnection, dbTableConfig } = require("../lib/dbconnect");

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns success message once user inserted into database
 */

//insert user data into database
const createUser = (req, res, next) => {
  console.log("create new user in database");
  var sql = `INSERT INTO student (username, password) VALUES ('${req.headers.username}','${req.headers.password}')`;
  dbConnection().query(sql, function (err, result) {
    if (err) next(err);
    res.json({ message: "data inserted" });
  });
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 *
 * @returns all user from Database
 */

//fetch all user from database
const fetchAllUser = async (req, res, next) => {
  dbConnection().query("SELECT * FROM student", function (err, result) {
    if (err) next(err);
    res.json({ users: result });
  });
};

/**
 * @returns single user entity
 *
 */
const fetchUserByID = (req, res, next) => {
  dbConnection().connect(function (err) {
    if (err) next(err);
    dbConnection().query(
      `SELECT * FROM student WHERE username = '${req.query.email}'`,
      function (err, result) {
        if (err) next(err);
        res.json({ user: result });
      }
    );
  });
};

module.exports = { createUser, fetchAllUser, fetchUserByID };
