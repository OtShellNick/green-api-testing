import React from "react";

import { useGetContactInfoQuery } from "@store/greenApi";
import { useSelector } from "react-redux";

import IconDefault from "@assets/default.svg?jsx";

const Contact = ({ contact }) => {
    const { auth } = useSelector(({ auth }) => auth);
    const { data } = useGetContactInfoQuery({ ...auth, chatId: contact.id });

    console.log('contact info', data);

    if (!data) return null;

    return <li className="contacts__item">
        {data.avatar ? <img className="contacts__item_avatar" src={data.avatar} alt="#" /> : <IconDefault />}
        <div className="contacts__item_name">
            <span>{data.name}</span>
        </div>
    </li>
};

export default Contact;