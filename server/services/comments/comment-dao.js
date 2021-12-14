const commentModel = require("./comment-model");
const userModel = require("../users/user-model");

const findCommentBySpot = (spotId) => {
  return commentModel.find({ spot: spotId });
};

const createComment = (comment) => {
    console.log(comment);
  return userModel
    .findById(comment.author)
    .then((user) => {
        console.log(user);
      return commentModel.create({
        ...comment,
        username: `${user.firstName} ${user.lastName}`,
      })}
    );
};

const deleteComment = (id) => commentModel.deleteOne({ _id: id });

module.exports = {
  findCommentBySpot,
  createComment,
  deleteComment,
};
