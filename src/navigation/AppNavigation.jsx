import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Register from '../screens/Auth/Register';
import AppConatiner from './AppConatiner';

const Stack = createStackNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='App'>
                <Stack.Screen
                    name='Register'
                    component={Register}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='App'
                    component={AppConatiner}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation