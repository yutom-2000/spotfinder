const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const fs = require('fs');
const path = require('path');
const multer = require('multer');


const CONSTANTS = require('./consts');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
    "https://serene-wilson-429f98.netlify.app");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const session = require('express-session')
app.use(session({
    saveUninitialized: false,
    resave: false,
  secret: 'keyboard cat',
  cookie: {}
}));

mongoose.connect(CONSTANTS.MONGODB_URL);

require('./services/users/user-service')(app);
require('./services/images/storage-service')(app);

app.listen(process.env.PORT || 4000);