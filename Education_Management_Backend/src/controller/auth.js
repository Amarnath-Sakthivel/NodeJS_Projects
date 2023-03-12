"use strict";

const config = require("../lib/config");

const authorizeUser = (req, res, next) => {
  var err = new Error();
  err.status = 401;
  err.message = "Un-Authorized user";

  let authToken = req.headers.authorization;

  const technicaluser = config.technicalUser;
  const technicalUserPass = config.technicalUserPass;

  //authorize user
  if (!authToken || !authToken.startsWith("Basic", 0) )  next(err);
  
  //validate user from database/localstorage
  else {
    let authUser = authToken.split(" ")[1].trim();  // seperate user credentials from token

    let decodeBase64 = Buffer.from(authUser, "base64"); // decode the string

    let username = decodeBase64.toString().split(':')[0];   // get username

    let password = decodeBase64.toString().split(':')[1];   //get password

    username==technicaluser && password == technicalUserPass ? next() : next(err);
  }

};

module.exports = authorizeUser;
