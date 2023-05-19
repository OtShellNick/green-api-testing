import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Contact from "./Contact";

import './Contacts.scss';
import { useDispatch } from "react-redux";
import { setActiveChat } from "../../../store/chatStore";

const Contacts = ({ contacts }) => {
    const dispatch = useDispatch();

    const SignupSchema = Yup.object().shape({
        contact: Yup.number().typeError('Must be a number'),
    });

    const formik = useFormik({
        validationSchema: SignupSchema,
        initialValues: {
            contact: '',
        },
        onSubmit: (values, { resetForm }) => {
            const chatId = values.contact.split('+')[1] + '@c.us';
            dispatch(setActiveChat(chatId))
            resetForm();
        },
    });

    return <ul className="contacts">
        <li>
            <form className='contacts__form' onSubmit={formik.handleSubmit}>
                <input
                    id="contact"
                    name="contact"
                    type="tel"
                    placeholder='+79999999999'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                />
                {formik.touched.contact && formik.errors.contact}
            </form>
        </li>
        {contacts && contacts.map((contact, index) => {
            return <Contact key={contact.id + index} contact={contact} />
        })}
    </ul>
};

export default Contacts;