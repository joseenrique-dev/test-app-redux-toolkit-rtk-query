import React from 'react';
import ReactionButtons from './ReactionButton';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../users/usersSlice';

const PostsExcerpt = ({ post }) => {
  const users = useSelector(getAllUsers);
  const author = users.find((user) => user.id === post.userId);
  return (
    <div className='group relative p-3'>
      <Link to={`post/${post.id}`}>
        <div class='max-w-sm rounded overflow-hidden shadow-lg bg-gray-300'>
          <img
            src={`https://robohash.org/${author.name} ${post.id}`}
            alt='Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
            className='h-full w-full object-cover object-center'
          />
          <div class='px-6 py-4'>
            <div class='font-bold text-xl mb-2'>Robot: {author.name}</div>
            <p class='text-gray-700 text-base'>{post.title}</p>
          </div>
          <div class='px-6 pt-4 pb-2'>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
            <ReactionButtons post={post} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostsExcerpt;
