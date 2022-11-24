import React from 'react';
import { useSelector } from 'react-redux';
import PostAuthor from './PostAuthor';
import { getPostById } from './postsSlice';
import TimeAgo from './TimeAgo';

const SinglePostPage = ({ postId }) => {
  const post = useSelector(getPostById(postId));
  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
    </div>
  );
};

export default SinglePostPage;
