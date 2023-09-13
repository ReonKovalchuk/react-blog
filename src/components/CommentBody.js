import React from "react";
import defaultUserpic from '../img/userpic 280.jpeg'

function CommentBody({ comment }) {

  return (
    <article className="media">

      <figure className="media-left">
        <p className="image is-48x48">
          <img src={defaultUserpic} alt="default userpic" />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{comment.name}</strong>
            <br />
            {comment.body}
            <br />
            <small><i className="fa-regular fa-heart"></i></small>
          </p>
        </div>
      </div>
    </article>
  )
}

export default CommentBody