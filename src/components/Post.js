import React from "react";
import PostBody from './PostBody'
import CommentSection from './CommentSection'

function Post({
  postData,
  commentsData,
  newComment,
  handlePostComment,
  handleCommentChange }) {

  return (
    <main>
      <section className="section">
        <div className="container is-max-desktop">
          <PostBody postData={postData} commentsN={commentsData.length} />
          <CommentSection commentsData={commentsData} newComment={newComment} handlePostComment={handlePostComment} handleCommentChange={handleCommentChange} />
        </div>
      </section>
    </main>

  )
}

export default Post;