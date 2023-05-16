import React, { useEffect, lazy } from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import { useAuth } from '@helpers/useAuth';

const Login = lazy(() => import('@components/Login/Login'));


const App = () => {
    const nav = useNavigate();
    const location = useLocation();
    const [auth] = useAuth();

    useEffect(() => {
        if (!auth) {
            if (location.pathname !== '/login') nav('/login')
        }
    })

    return <Routes>
        {/* <Route path='/' element={<MainPage />} /> */}
        <Route path='/login' element={<Login />} />
    </Routes>;
};

export default App;