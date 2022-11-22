import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (state, action) => {
    const users = await axios.get(USERS_URL);
    return users.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

//defining selectors
export const getAllUsers = (state) => state.users;

export default usersSlice.reducer;
