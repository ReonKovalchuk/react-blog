import React from 'react';
import LikeBtn from './LikeBtn';

function PostFooter({ likes, id, commentsN }) {

  return (
    <small>
      <nav className="level is-mobile">
        <div className="level-left">
          <div className="level-item mr-4">
            <LikeBtn likes={likes} />
          </div>

          <div className="level-item mr-4">
            <a href={`index.html?id=${id}#reply`} title="Reply"><i className="fa-regular fa-comment-dots"></i></a>
          </div>
          <div className="level-item mr-4">
            <a href={`index.html?id=${id}#comments`}> {commentsN} {commentsN === 1 ? 'comment' : 'comments'}</a>
          </div>
        </div>
      </nav>
    </small>
  )
}

export default PostFooter;