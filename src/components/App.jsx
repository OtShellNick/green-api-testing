import React, { useEffect, lazy } from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import { useSelector } from 'react-redux';

import Layout from './Layout/Layout';

const Login = lazy(() => import('@components/Login/Login'));
const Main = lazy(() => import('@components/Main/Main'));


const App = () => {
    const nav = useNavigate();
    const location = useLocation();
    const { auth } = useSelector(({ auth }) => auth);

    useEffect(() => {
        console.log(location.pathname, auth)
        if (!auth && location.pathname !== '/login') nav('/login')

        if (!!auth && location.pathname !== '/') nav('/');
    }, [auth]);

    return <Routes>
        <Route element={<Layout />} >
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
        </Route>
    </Routes >;
};

export default App;