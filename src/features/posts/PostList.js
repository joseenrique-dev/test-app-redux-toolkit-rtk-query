import React from 'react';
import { useSelector } from 'react-redux';
import PostAuthor from './PostAuthor';
import { getAllPosts } from './postSlice';

export const PostsList = () => {
  const posts = useSelector(getAllPosts);

  const renderedPosts = posts.map((post) => (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
    </article>
  ));

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
