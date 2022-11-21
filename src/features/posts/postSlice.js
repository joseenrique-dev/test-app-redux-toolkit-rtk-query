import { createSlice, nanoid } from '@reduxjs/toolkit';

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
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      //If you want to add a meta or error property to your action, or customize the payload of your action,
      //you have to use the prepare notation for defining the case reducer.
      prepare(title, content) {
        //entry params to the action
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

//define actions here !!!
export const { postAdded } = postsSlice.actions;
//creating selectors
export const getAllPosts = (state) => state.posts;

export default postsSlice.reducer;
