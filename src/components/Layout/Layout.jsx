import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";


import './Layout.scss';

const Layout = () => {
    return <div className="app">
        <div className="app__top"></div>
        <div className="app__bottom"></div>
        <div className="app__content">
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    </div>
};

export default Layout;