import React from 'react';
import { useSelector } from 'react-redux';

import { useGetChatsListQuery } from '@store/greenApi';

import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';

import './Main.scss';

const Main = () => {
    const { auth } = useSelector(({ auth }) => auth);
    const { data } = useGetChatsListQuery(auth);

    return <div className='main'>
        <Contacts contacts={data} />
        <Chat />
    </div>
};

export default Main;