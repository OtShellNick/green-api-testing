import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chatId: null,
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setActiveChat: (state, { payload }) => {
            state.chatId = payload;
        },
    },
});


export const { setActiveChat } = chatSlice.actions;

export default chatSlice.reducer;