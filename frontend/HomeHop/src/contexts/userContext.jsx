import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
    user: null,
    setUser: () => {},
    ready: false
});

export function UserContextProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        axios.get('/profile').then(({ data }) => {
            setUser(data);
            setReady(true);
        }).catch(() => {
            navigate('/login');
        });
    }, []);

    return (
        <UserContext.Provider value={{ user, ready, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
