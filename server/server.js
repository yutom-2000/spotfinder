const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const fs = require("fs");
const path = require("path");
const multer = require("multer");

const CONSTANTS = require("./consts");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const session = require("express-session");
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "verysecret",
    cookie: {
      maxAge: 1000 * 60 * 10, //1 hour
    },
    rolling: true,
  })
);

mongoose.connect(CONSTANTS.MONGODB_URL);

require("./services/users/user-service")(app);
require("./services/images/storage-service")(app);

console.log(process.env.NODE_ENV);
console.log(CONSTANTS.MONGODB_URL);

app.listen(process.env.PORT || 4000);
