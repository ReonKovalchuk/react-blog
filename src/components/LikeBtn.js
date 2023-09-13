import React, { useState } from 'react'
function LikeBtn({ likes }) {

  const [liked, setLiked] = useState(null);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className='like-btn' >
      <i className={liked ? "fa-regular fa-heart liked mr-2" : "fa-regular fa-heart mr-2"}></i>
      {liked ? likes + 1 : likes}
    </button>
  );

}

export default LikeBtn;