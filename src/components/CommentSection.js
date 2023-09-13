import React from "react";
import CommentBody from "./CommentBody";
import ReplyForm from './ReplyForm'

function CommentSection({
  commentsData,
  handleCommentChange,
  handlePostComment,
  newComment }) {
  return (
    <div className="box comments-container" id="comments">
      {commentsData.map((comment, id) => {
        return (
          <CommentBody comment={comment} key={id} />
        )
      })}
      <ReplyForm newComment={newComment} handlePostComment={handlePostComment} handleCommentChange={handleCommentChange} />
    </div>
  )
}

export default CommentSection