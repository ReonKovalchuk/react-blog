import React from 'react';

import PostFooter from './PostFooter'
import Userpic from './Userpic'

function PostList(props) {


  return (
    <main>
      <section className="section">
        <div className="container is-max-desktop posts-container">
          {props.postsData.map(post => (
            <div key={post.id} className='box'>
              <article className="media post">
                <Userpic userID={post.user_id} />
                <div className="media-content post-content">
                  <div className="content">
                    <a href={`index.html?id=${post.id}`}>
                      <h2 className="title is-4 article-link">{post.title}</h2>
                    </a>

                  </div>
                  <PostFooter id={post.id} likes={post.likes} commentsN={post.commentsN} />
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PostList;