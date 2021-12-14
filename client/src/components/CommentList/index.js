import { useEffect } from "react";
import { API_URL } from "../../consts";
import Comment from "./Comment";
import { useState } from "react";

const CommentList = (props) => {
  const [comments, setComments] = useState();
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState();
  const getComments = () => {
    fetch(`${API_URL}/comments/${props.spotId}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((comments) => setComments(comments));
  };
  useEffect(getComments, []);

  const saveComment = () => {
      fetch(`${API_URL}/comments`, {
          method: "POST",
          credentials: "include",
          headers: {
              "content-type": "application/json"
          },
          body: JSON.stringify({author: user._id, comment: newComment, username: `${user.firstName} ${user.lastName}`, spot: props.spotId})
      }).then((res) => res.json()).then((comment) => {
        console.log(comment);  
        return setComments([...comments, comment])})
  };
  const getProfile = () => {
    fetch(`${API_URL}/profile`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
          return res.json()})
      .then((user) => {
        setUser(user);
      })
      .catch((e) =>  {
      setUser(undefined)});
  };
  useEffect(getProfile, [comments]);

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div className="col-8">
            <input
              className="form-control"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here"
            ></input>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={saveComment}>
              Save
            </button>
          </div>
        </div>
      </li>
      {comments && comments.map((comment) => Comment(comment))}
    </ul>
  );
};

export default CommentList;
