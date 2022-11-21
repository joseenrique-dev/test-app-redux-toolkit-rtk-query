import { configureStore } from '@reduxjs/toolkit'

const initialState = {
    id: '1', title:'Learning redux Toolkit', content: 'I have heard good things...',
    id: '1', title:'Slices...', content: 'The more I say slice, the more I want pizza...',
}

export const postSlice = configureStore({
    name:'posts',
    initialState,
    reducer: {},
})

export default postSlice.reducer;