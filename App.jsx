import { View, Text } from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import AppContextProvider from './src/context/AppContextProvider';

const App = () => {
    return (
        <AppContextProvider>
            <AppNavigation />
        </AppContextProvider>
    )
}

export default App