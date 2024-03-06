import React, { createContext, useState } from "react";

// Create a context
export const UserContext = createContext(null);

// Create a provider component
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    const [userDataLogin, setUserDataLogin] = useState({
        email: "",
        password: "",
    });
    return (
        <UserContext.Provider value={{ userData, setUserData, userDataLogin, setUserDataLogin }}>
            {children}
        </UserContext.Provider>
    );
};
