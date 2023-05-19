import React, { useEffect, useRef } from "react";
import { useGetChatHistoryQuery, useGetContactInfoQuery, useGetNotificationQuery, useDeleteNotificationQuery } from "@store/greenApi";
import { useSelector } from "react-redux";

import ChatForm from "./ChatForm";

import IconDefault from '@assets/default.svg?jsx';

const ActiveChat = () => {
    const bottom = useRef(null);
    const prevNotify = useRef(null);
    const { auth } = useSelector(({ auth }) => auth);
    const { chatId } = useSelector(({ chat }) => chat);
    const { data: messages, refetch } = useGetChatHistoryQuery({ ...auth, chatId });
    const { data: user } = useGetContactInfoQuery({ ...auth, chatId });
    const { data: notification } = useGetNotificationQuery(auth, { pollingInterval: 3000 });

    useEffect(() => {
        prevNotify.current = notification;
    });

    if (prevNotify.current?.receiptId !== notification?.receiptId) refetch();

    useDeleteNotificationQuery({ ...auth, receiptId: notification?.receiptId }, { skip: !notification });

    useEffect(() => {
        if (bottom) bottom.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    console.log(user, chatId)

    return <div className="chat__active">
        <div className="chat__active_header">
            {user?.avatar ? <img className="contacts__item_avatar" src={user.avatar} alt="#" /> : <IconDefault className="contacts__item_avatar-default" />}
            <div className="contacts__item_name">
                <span>{user?.name ? user.name : chatId}</span>
            </div>
        </div>
        <div className="chat__active_content">
            <ul>
                {messages && messages.map(message => {
                    return <li key={message.idMessage} style={{ textAlign: message.type === 'incoming' ? 'end' : 'initial', padding: '5px 0' }}>{message.textMessage}</li>
                })}
                <li style={{ height: 1 }} ref={bottom} />
            </ul>
        </div>
        <ChatForm refetch={refetch} />
    </div>
};

export default ActiveChat;