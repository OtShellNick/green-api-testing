import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const greenApi = createApi({
    reducerPath: 'greenApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.green-api.com/' }),
    endpoints: (builder) => ({
        getChatsList: builder.query({
            query: ({ idInstance, apiTokenInstance }) => `waInstance${idInstance}/getChats/${apiTokenInstance}`,
        }),
    }),
});

export const { useGetChatsListQuery } = greenApi;