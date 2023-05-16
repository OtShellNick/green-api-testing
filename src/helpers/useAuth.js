import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const authorization = localStorage.getItem('auth');

        if (authorization !== null) setAuth(authorization);

        console.log('auth', authorization)
    }, []);

    const setAuthorization = (data) => {
        localStorage.setItem('auth', JSON.stringify(data));
        setAuth(data);
    }

    return [auth, setAuthorization];
}