import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Paco Gelme Cuesta' },
  { id: '1', name: 'Alan Brito Dulce' },
  { id: '2', name: 'Aquino Pasanada' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

//defining selectors
export const getAllUsers = (state) => state.users;

export default usersSlice.reducer;
