import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../users/usersSlice';
import { addNewPost } from './postsSlice';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatue, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();
  const users = useSelector(getAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatue === 'idle';

  const onSavePostClicked = () => {
    try {
      if (canSave) {
        setAddRequestStatus('pending');
        dispatch(addNewPost({ title, content, userId })).unwrap();
      }

      setTitle('');
      setContent('');
      setUserId('');
    } catch (err) {
      console.error(err);
    } finally {
      setAddRequestStatus('idle');
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
        <label htmlFor='postTitle'>Author:</label>
        <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
          <option value=''></option>
          {userOptions}
        </select>
        <button
          type='button'
          onClick={onSavePostClicked}
          disabled={!canSave}
          style={{ cursor: canSave ? 'pointer' : '' }}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};
