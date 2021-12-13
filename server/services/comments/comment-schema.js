const mongoose = require("mongoose");
const commentSchema = mongoose.Schema(
  {
    author: String,
    name: String,
    comment: String,
  },
  { collection: "comments" }
);
module.exports = commentSchema;
