import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'

import authReducer from './authStore';
import { greenApi } from './greenApi';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [greenApi.reducerPath]: greenApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(greenApi.middleware),
});

setupListeners(store.dispatch);