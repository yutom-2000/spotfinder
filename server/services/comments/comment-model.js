const mongoose = require('mongoose');
const commentSchema = require('./comment-Schema');
const commentModel = mongoose
  .model('CommentModel', commentSchema);
module.exports = commentModel;