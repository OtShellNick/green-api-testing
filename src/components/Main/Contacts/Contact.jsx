import React from "react";

import { useGetContactInfoQuery } from "@store/greenApi";
import { setActiveChat } from "@store/chatStore";
import { useDispatch, useSelector } from "react-redux";

import IconDefault from "@assets/default.svg?jsx";

const Contact = ({ contact }) => {
    const { auth } = useSelector(({ auth }) => auth);
    const { data } = useGetContactInfoQuery({ ...auth, chatId: contact.id });
    const dispatch = useDispatch();

    if (!data) return null;

    return <li
        className="contacts__item"
        onClick={() => {
            dispatch(setActiveChat(data.chatId));
        }}>
        {data.avatar ? <img className="contacts__item_avatar" src={data.avatar} alt="#" /> : <IconDefault className="contacts__item_avatar-default" />}
        <div className="contacts__item_name">
            <span>{data.name ? data.name : data.chatId}</span>
        </div>
    </li>
};

export default Contact;