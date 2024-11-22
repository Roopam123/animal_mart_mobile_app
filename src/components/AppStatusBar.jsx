import { StatusBar } from 'react-native';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const AppStatusBar = () => {
    const { isDarkMode } = useContext(AppContext)
    return (
        <StatusBar
            backgroundColor={isDarkMode ? "#141414" : "#F6F8F9"}
            barStyle={isDarkMode}
        />
    )
}
export default AppStatusBar;