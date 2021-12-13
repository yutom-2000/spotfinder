const commentModel = require('./comment-model');

const findCommentBySpot = (spotId) => commentModel.findById(spotId);

const createComment = (comment) => commentModel.create(comment);

const deleteComment = (id) => commentModel.deleteOne({_id: id});

module.exports = {
    findCommentBySpot, createComment, deleteComment
}