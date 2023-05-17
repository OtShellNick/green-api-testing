import React from "react";

import Contact from "./Contact";

import './Contacts.scss';

const Contacts = ({ contacts }) => {

    return <ul className="contacts">
        {contacts && contacts.map((contact, index) => {
            return <Contact key={contact.id + index} contact={contact} />
        })}
    </ul>
};

export default Contacts;