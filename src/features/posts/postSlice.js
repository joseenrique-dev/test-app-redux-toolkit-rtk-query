import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Learning redux Toolkit',
    content: 'I have heard good things...',
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'The more I say slice, the more I want pizza...',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

//define actions here !!!
export const { postAdded } = postsSlice.actions;
//creating selectors
export const getAllPosts = (state) => state.posts;

export default postsSlice.reducer;
