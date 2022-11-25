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
    <div className='group relative p-3 block rounded-lg bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:text-white hover:bg-sky-500 hover:ring-sky-500'>
      <Link to={`post/${post.id}`}>
        <div className='flex items-center space-x-3'>
          <img
            src={`https://robohash.org/${author?.username} ${post.id}`}
            alt='Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
            className='h-full w-full object-cover object-center'
          />
        </div>
      </Link>
      <p className='text-slate-500 group-hover:text-white text-sm '>
        {post.title}
      </p>
      <div className='pt-4 pb-2'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </div>
    </div>
  );
};

export default PostsExcerpt;
