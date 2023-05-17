import React from 'react';
import { useSelector } from 'react-redux';

import { useGetChatsListQuery } from '@store/greenApi';

import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';

import './Main.scss';

const Main = () => {
    const { auth } = useSelector(({ auth }) => auth);
    const { data } = useGetChatsListQuery(auth);

    console.log(data);

    return <div className='main'>
        <Contacts />
        <Chat />
    </div>
};

export default Main;