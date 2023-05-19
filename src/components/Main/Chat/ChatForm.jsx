import React, { useState } from "react";
import { useFormik } from 'formik';
import { useSelector } from "react-redux";
import { useSendMessageQuery } from "@store/greenApi";

const ChatForm = ({ refetch }) => {
    const { auth } = useSelector(({ auth }) => auth);
    const { chatId } = useSelector(({ chat }) => chat);
    const [message, setMessage] = useState('');

    useSendMessageQuery({ ...auth, chatId, message: message }, { skip: message === '' });

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        onSubmit: (values, { resetForm }) => {
            setMessage(values.message);
            resetForm();
            refetch();
        },
    });

    return <div className="chat__active_form">
        <form className='login__form' onSubmit={formik.handleSubmit}>
            <input
                id="message"
                name="message"
                type="text"
                placeholder='Your message'
                onChange={formik.handleChange}
                value={formik.values.message}
            />
            <button className='chat__active_form_button' type="submit">Send</button>
        </form>
    </div>
};

export default ChatForm;