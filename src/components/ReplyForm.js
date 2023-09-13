import React from "react";
import defaultUserpic from '../img/userpic 280.jpeg'



function ReplyForm({ newComment, handlePostComment, handleCommentChange }) {


  return (
    <article className="media" id="reply">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={defaultUserpic} alt="default userpic" />
        </p>
      </figure>
      <div className="media-content">
        <form onSubmit={handlePostComment}>
          <div className="field is-grouped">

            <p className="control has-icons-left is-expanded">
              <input className="input is-normal"
                type="text"
                placeholder="Anonimous"
                value={newComment.username || ""}
                name="username"
                required
                onChange={handleCommentChange} />
              <span className="icon is-small is-left">
                <i className="far fa-user"></i>
              </span>
            </p>

            <p className="control has-icons-left is-expanded">
              <input className="input is-normal"
                type="email"
                placeholder="example@email.com"
                value={newComment.email || ""}
                name="email"
                required
                onChange={handleCommentChange} />
              <span className="icon is-small is-left">
                <i className="far fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">

              <textarea className="textarea comment-text"
                placeholder="Add a comment..."
                value={newComment.body || ""}
                name="body"
                required
                onChange={handleCommentChange}></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button post-btn">Post comment</button>
            </p>
          </div>
        </form>
      </div>
    </article>
  )
}

export default ReplyForm