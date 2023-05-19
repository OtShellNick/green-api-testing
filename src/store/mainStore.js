import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'

import authReducer from './authStore';
import { greenApi } from './greenApi';
import chatReducer from './chatStore';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [greenApi.reducerPath]: greenApi.reducer,
        chat: chatReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(greenApi.middleware),
});

setupListeners(store.dispatch);