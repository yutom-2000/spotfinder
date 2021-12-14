const mongoose = require("mongoose");
const UserModel = require("../users/user-model");
const commentSchema = mongoose.Schema(
  {
    author: {type: mongoose.SchemaTypes.ObjectId, ref: "UserModel"},
    spot: String,
    comment: String,
    username: String,
  },
  { collection: "comments" }
);
module.exports = commentSchema;
