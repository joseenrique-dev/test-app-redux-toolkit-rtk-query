import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import { getPostById } from './postsSlice';
import TimeAgo from './TimeAgo';

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => getPostById(state, Number(postId)));
  console.log('In home', post);

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
