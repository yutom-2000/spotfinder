const mongoose = require('mongoose');

const schema = require("./image-schema");

const model = mongoose.model("image-model", schema);

module.exports = model;