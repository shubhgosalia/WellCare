import React, { useState, useEffect, createContext } from "react";

export const ContactsContext = createContext();

const ContactsProvider = ({ children }) => {
    useEffect(() => {
        console.log("chalta hai yeh...");
    });

    const [a, setA] = useState([]);

    return (
        <ContactsContext.Provider value={a}>
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsProvider;