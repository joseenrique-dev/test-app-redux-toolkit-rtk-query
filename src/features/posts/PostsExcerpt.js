import React from 'react';
import ReactionButtons from './ReactionButton';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import { Link } from 'react-router-dom';

const PostsExcerpt = ({ post }) => {
  return (
    <div className='group relative'>
      <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
        <img
          src='https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg'
          alt='Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
          className='h-full w-full object-cover object-center'
        />
      </div>
      <h3 className='mt-6 text-sm text-gray-500'>
        <a href='#'>
          <span className='absolute inset-0'></span>
          {post.title}
        </a>
      </h3>
      <p className='text-base font-semibold text-gray-900'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </p>
    </div>
  );
};

export default PostsExcerpt;

// <article className='post-excerpt'>
//       <h3>{post.title}</h3>
//       <p className='post-content'>{post.body.substring(0, 75)}...</p>
//       <p className='postCredit'>
//         <PostAuthor userId={post.userId} />
//         <TimeAgo timestamp={post.date} />
//         <ReactionButtons post={post} />
//       </p>
//       <Link to={`post/${post.id}`}>
//         <p
//           style={{
//             color: 'white',
//             fontWeight: 'bold',
//           }}
//         >
//           View
//         </p>
//       </Link>
//     </article>
