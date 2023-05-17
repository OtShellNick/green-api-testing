import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import './Login.scss';
import { login } from '@store/authStore';

const Login = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            idInstance: '',
            apiTokenInstance: '',
        },
        onSubmit: values => {
            dispatch(login(values))
        },
    });

    return <div className='login'>
        <div className='login__top'></div>
        <div className='login__bottom'></div>
        <div className="login__form_wrapper">
            <form className='login__form' onSubmit={formik.handleSubmit}>
                <input
                    id="idInstance"
                    name="idInstance"
                    type="text"
                    placeholder='idInstance'
                    onChange={formik.handleChange}
                    value={formik.values.idInstance}
                />
                <input
                    id="apiTokenInstance"
                    name="apiTokenInstance"
                    type="text"
                    placeholder='apiTokenInstance'
                    onChange={formik.handleChange}
                    value={formik.values.apiTokenInstance}
                />
                <button className='login__form_button' type="submit">Login</button>
            </form>
        </div>
    </div>
};

export default Login;