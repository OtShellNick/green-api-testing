import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


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
        }),
        getChatHistory: builder.query({
            query: ({ idInstance, apiTokenInstance, chatId }) => ({
                url: `waInstance${idInstance}/GetChatHistory/${apiTokenInstance}`,
                method: 'POST',
                body: { chatId, count: 100 },
            }),
            transformResponse: data => {
                console.log('transform', data)
                return data.reverse();
            }
        }),
        sendMessage: builder.query({
            query: ({ idInstance, apiTokenInstance, chatId, message }) => ({
                url: `waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
                method: 'POST',
                body: { chatId, message },
            })
        }),
        getNotification: builder.query({
            query: ({ idInstance, apiTokenInstance }) => `waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
        }),
        deleteNotification: builder.query({
            query: ({ idInstance, apiTokenInstance, receiptId }) => ({
                url: `waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`,
                method: 'DELETE',
            })
        }),
    }),
});

export const {
    useGetChatsListQuery,
    useGetContactInfoQuery,
    useGetChatHistoryQuery,
    useSendMessageQuery,
    useGetNotificationQuery,
    useDeleteNotificationQuery
} = greenApi;