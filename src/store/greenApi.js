import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const greenApi = createApi({
    reducerPath: 'greenApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.green-api.com/' }),
    endpoints: (builder) => ({
        getChatsList: builder.query({
            query: ({ idInstance, apiTokenInstance }) => `waInstance${idInstance}/getChats/${apiTokenInstance}`,
        }),
        getContactInfo: builder.query({
            query: ({ idInstance, apiTokenInstance, chatId }) => ({
                url: `waInstance${idInstance}/GetContactInfo/${apiTokenInstance}`,
                method: 'POST',
                body: { chatId },
            })
        })
    }),
});

export const { useGetChatsListQuery, useGetContactInfoQuery } = greenApi;