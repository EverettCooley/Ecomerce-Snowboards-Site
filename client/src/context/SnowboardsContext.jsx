import React, { useState, createContext } from "react";

export const SnowboardsContext = createContext();

export const SnowboardsContextProvider = (props) => {
    const [snowboards, setSnowboards] = useState([]);

    return (
        <SnowboardsContext.Provider value={{snowboards, setSnowboards}}>
            {props.children}
        </SnowboardsContext.Provider>
    );
};
