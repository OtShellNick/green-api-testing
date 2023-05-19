import React from 'react';
import { useSelector } from 'react-redux';

import NotSelectedChat from './NotSelectedChat';
import ActiveChat from './ActiveChat';

import './Chat.scss';

const Chat = () => {
    const { chatId } = useSelector(({ chat }) => chat);

    console.log('chat', chatId);

    return <div className='chat'>
        {!chatId && <NotSelectedChat />}
        {chatId && <ActiveChat />}
    </div>
};

export default Chat;