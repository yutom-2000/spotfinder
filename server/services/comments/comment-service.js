const commentDao = require("./comment-dao");

module.exports = (app) => {
  const createComment = (req, res) =>
    commentDao.createComment(req.body).then((comment) => res.json(comment));

  const deleteComment = (req, res) =>
    commentDao.deleteComment(req.params.id).then((status) => res.send(status));

  const findCommentBySpot = (req, res) =>
    commentDao.findCommentBySpot(req.params.spotId).then((spot) => res.json(spot));

    app.get("/api/comments/:spotId", findCommentBySpot);
    app.post("/api/comments/", createComment);
    app.delete("/api/comments/:id", deleteComment);
};
