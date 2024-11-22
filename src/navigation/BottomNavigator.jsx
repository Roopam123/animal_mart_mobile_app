import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../screens/App/Home';
import Chat from '../screens/App/Chat';
import Sell from '../screens/App/Sell';
import MyAds from '../screens/App/MyAds';
import Account from '../screens/App/Account';
import HomeIcon from "react-native-vector-icons/Foundation";
import ChatIcon from "react-native-vector-icons/Ionicons";
import SellIcon from "react-native-vector-icons/Entypo";
import AccountIcon from "react-native-vector-icons/MaterialIcons";


const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
    return (
        <Bottom.Navigator
            tabBarOptions={{
                activeTintColor: '#6E9BFF',
                inactiveTintColor: '#7E858C',
                labelStyle: { fontSize: 20 },
                style: {
                    height: 60, // Adjust tab bar height here
                    borderTopWidth: 1, // Add top border for separation
                    borderTopColor: '#EAEAEA',
                },
            }}
        >
            <Bottom.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <View>
                            <HomeIcon name="home" size={20} color={color} />
                        </View>
                    )
                }}
            />
            <Bottom.Screen
                name='Chat'
                component={Chat}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <View>
                            <ChatIcon name="chatbox-ellipses-outline" size={20} color={color} />
                        </View>
                    )
                }}
            />
            <Bottom.Screen
                name='Sell'
                component={Sell}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <View>
                            <SellIcon name="circle-with-plus" size={20} color={color} />
                        </View>
                    )
                }}
            />
            <Bottom.Screen
                name='MyAds'
                component={MyAds}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <View>
                            <AccountIcon name="account-circle" size={20} color={color} />
                        </View>
                    )
                }}

            />
            <Bottom.Screen
                name='Account'
                component={Account}

                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <View>
                            <AccountIcon name="account-circle" size={20} color={color} />
                        </View>
                    )
                }}
            />
        </Bottom.Navigator >
    )
}

export default BottomNavigator;