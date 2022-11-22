import React from 'react';
import ReactionButtons from './ReactionButton';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostsExcerpt = ({ post }) => {
  return (
    <article className='post-excerpt'>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.body.substring(0, 100)}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </p>
    </article>
  );
};

export default PostsExcerpt;
