import { useEffect, useState } from "react";
import { API_URL } from "../../consts";

const Comment = (comment) =>  {
    return <li className="list-group-item">
        <div className="row">
            <div className="col-3 border-end border-2">
                <a href={`/profile/${comment.author}`}><h5>{comment.username}</h5></a>
            </div>
            <div className="col-9">
                <p>{comment.comment}</p>
            </div>
        </div>
    </li>
}


export default Comment;