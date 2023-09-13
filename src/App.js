import './App.css';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation'
import Pagination from './components/Pagination'
import Post from './components/Post'
import PostList from './components/PostList'
import { getPostByID, getPostsData, getComments, postComment } from './script/post-get'
import { ThreeDots } from 'react-loader-spinner'


function App() {

  const [pageType, setPageType] = useState('main');
  useEffect(() => {
    const pageParams = new URLSearchParams(window.location.search);
    const id = pageParams.get('id');
    if (id) {
      setPageType('post');
    } else {
      setPageType('main');
    }
  }, []);

  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState([]);
  const [commentsData, setCommentsData] = useState([])

  useEffect(() => {
    async function fetchData() {
      if (pageType === 'main') {
        try {
          const data = await getPostsData();
          setPostsData(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
          setPostsData(null);
        }
      } else if (pageType === 'post') {
        try {
          const postData = await getPostByID();
          setPostData(postData);
          const commentsData = await getComments();
          setCommentsData(commentsData);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
          setPostData(null);
        }
      }
    }

    fetchData();
  }, [pageType]);

  const [newComment, setNewComment] = useState({});

  const handlePostComment = async (event) => {
    event.preventDefault();

    if (newComment.body) {
      const result = await postComment(newComment);
      if (result.code !== 201) {
        alert("Could't post your comment. Try again later")
      } else {
        setNewComment((prev) =>
          ({ ...prev, body: '' })
        );
        setCommentsData((prev) => [...prev, newComment])
      }
    }
  }

  const handleCommentChange = ({ target }) => {
    const { name, value } = target;
    setNewComment((prev) =>
      ({ ...prev, [name]: value })
    );
  }

  if (loading) {
    return (
      <div className="App">
        <Navigation />

        <div className='loading'><ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4d66a8"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          wrapperClassName=""
          visible={true}
        />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <Navigation />
        <div className='error'>Error: {error.message}</div>
      </div>
    );
  }


  if ((pageType === 'main' && postsData.posts.length === 0)
    || (pageType === 'post' && postData.length === 0)) {
    return (
      <div className="App">
        <Navigation />
        <div className='error'>Error: page not found</div>
      </div>
    );
  }

  if (pageType === 'main') {
    return (
      <div className="App">
        <Navigation />
        <PostList postsData={postsData.posts} />
        <Pagination paginationData={postsData.pagination} />{/*currentPage={currentPage} onPagination={handlePagination} */}
      </div>
    )
  }
  if (pageType === 'post') {
    return (
      <div className="App">
        <Navigation />
        <Post postData={postData} commentsData={commentsData} newComment={newComment} handlePostComment={handlePostComment} handleCommentChange={handleCommentChange} />
      </div>)
  }
}

export default App;
