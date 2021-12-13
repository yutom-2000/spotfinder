const mongoose = require('mongoose');
const spotSchema = require('./spot-schema');
const spotModel = mongoose
  .model('SpotModel', spotSchema);
module.exports = spotModel;