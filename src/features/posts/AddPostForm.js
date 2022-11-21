import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../users/usersSlice';
import { postAdded } from './postSlice';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(getAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle('');
      setContent('');
      setUserId('');
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor='postContent'>Content:</label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />
        <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
          <option value=''></option>
          {userOptions}
        </select>
        <button type='button' onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};
