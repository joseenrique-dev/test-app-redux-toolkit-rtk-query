import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostAuthor from './PostAuthor';
import { getAllPosts, getPostsStatus, getPostsError } from './postsSlice';
import ReactionButtons from './ReactionButton';
import TimeAgo from './TimeAgo';

export const PostsList = () => {
  const posts = useSelector(getAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(getAllPosts);
    }
  }, [dispatch, postsStatus]);

  const orderedPost = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPost.map((post) => (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.content.substring(0, 100)}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </p>
    </article>
  ));

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
