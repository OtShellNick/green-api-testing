import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: JSON.parse(localStorage.getItem('auth')),
};

export const authSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            localStorage.setItem('auth', JSON.stringify(payload));
            state.auth = payload;
        },
        logout: (state) => {
            state.auth = null;
            localStorage.removeItem('auth');
        },
    },
});


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;