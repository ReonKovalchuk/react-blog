import React from "react";
import PostFooter from './PostFooter'
import Userpic from './Userpic'

function PostBody({ postData, commentsN }) {

  return (
    <div className="box">
      <article className="media post-container">
        <Userpic userID={postData.user_id} />
        <div className="media-content">
          <div className="content">
            <h1 className="title is-3 mb-1">{postData.title}</h1>
            <p>
              {postData.body}
            </p>
          </div>

          <PostFooter id={postData.id} commentsN={commentsN} likes={postData.likes} />
        </div>
      </article>
    </div>
  )
}

export default PostBody;