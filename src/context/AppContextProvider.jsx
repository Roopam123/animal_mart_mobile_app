import React, { useState } from 'react';
import AppContext from './AppContext.js';
import { useColorScheme } from "react-native";

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    return (
        <AppContext.Provider value={{ user, setUser, isDarkMode }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;