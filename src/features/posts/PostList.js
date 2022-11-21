import React from 'react';
import { useSelector } from 'react-redux';
import PostAuthor from './PostAuthor';
import { getAllPosts } from './postSlice';
import TimeAgo from './TimeAgo';

export const PostsList = () => {
  const posts = useSelector(getAllPosts);

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
