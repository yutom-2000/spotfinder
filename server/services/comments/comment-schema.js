const mongoose = require("mongoose");
const commentSchema = mongoose.Schema(
  {
    author: String,
    spot: String,
    comment: String,
    username: String,
  },
  { collection: "comments" }
);
module.exports = commentSchema;
