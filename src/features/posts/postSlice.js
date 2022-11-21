import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Learning redux Toolkit',
    content: 'I have heard good things...',
  },
  {
    id: '1',
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza...',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducer: {},
});

//creating selectors
export const getAllPosts = (state) => state.posts;

export default postsSlice.reducer;
