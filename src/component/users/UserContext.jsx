// src/context/UserContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../../api/AxiosInstance'; // Import the Axios instance

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data from API using Axios
        axiosInstance.get('/users') // Adjust this path to your user API endpoint
            .then(response => setUser(response.data))
            .catch(error => console.error("Error fetching user data:", error));
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};
