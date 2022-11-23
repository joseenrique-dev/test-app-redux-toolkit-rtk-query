import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostsExcerpt from './PostsExcerpt';
import {
  getAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from './postsSlice';

export const PostsList = () => {
  const posts = useSelector(getAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);
  debugger;
  let content;
  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === 'failed') {
    content = <p>{postsError}</p>;
  }

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {content}
    </section>
  );
};
