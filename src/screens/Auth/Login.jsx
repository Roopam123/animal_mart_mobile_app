import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Dimensions, SafeAreaView, StatusBar, } from 'react-native';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import AppStatusBar from '../../components/AppStatusBar';



const { width, height } = Dimensions.get("screen");
const Login = () => {
    const { isDarkMode } = useContext(AppContext);
    return (
        <SafeAreaView>
            <StatusBar
                backgroundColor={isDarkMode ? "#141414" : "#F6F8F9"}
                barStyle={isDarkMode ? "light-content" : "dark-content"}
            />
            <ScrollView>
                <View style={[styles.loginContainer, { backgroundColor: isDarkMode ? "#141414" : "#F6F8F9" }]}>
                    <View>
                        <Text style={[styles.title, { color: isDarkMode ? "#FFFFFF" : "#193238" }]}>Animal Mart</Text>
                    </View>
                    <View style={styles.loginInputContainer}>
                        <View style={styles.inputConatiner}>
                            <Text style={[styles.inputText, { color: isDarkMode ? "#FFFFFF" : "#193238" }]}>Email Address</Text>
                            <TextInput
                                placeholder='Enter your email'
                                placeholderTextColor={isDarkMode ? "#98989F" : "#7E8A8C"}
                                style={[styles.input, { backgroundColor: isDarkMode ? "#2B2B2E" : "#EBEDED", color: isDarkMode ? "#98989F" : "#7E8A8C" }]} />
                        </View>
                        <View style={styles.inputConatiner}>
                            <Text
                                style={[styles.inputText, { color: isDarkMode ? "#FFFFFF" : "#193238" }]}>Password</Text>
                            <TextInput
                                placeholder='Enter your password'
                                placeholderTextColor={isDarkMode ? "#98989F" : "#7E8A8C"}
                                style={[styles.input, { backgroundColor: isDarkMode ? "#2B2B2E" : "#EBEDED", color: isDarkMode ? "#98989F" : "#7E8A8C" }]} />
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={[styles.loginBtn, { color: isDarkMode ? "#ffffff" : "#193238" }]}>
                            <Text style={[styles.loginBtnText, { color: isDarkMode ? "#ffffff" : "193238" }]}>Forgot Password?</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.loginBtn, { backgroundColor: isDarkMode ? "#1E5CE4" : "#17C6ED" }]}>
                            <Text style={styles.loginBtnText}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: isDarkMode ? "#2B2B2E" : "#193238" }} />
                        <View>
                            <Text style={{ width: 50, textAlign: 'center', color: isDarkMode ? "#43434D" : "#193238" }}>OR</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: isDarkMode ? "#2B2B2E" : "#193238" }} />
                    </View>
                    <TouchableOpacity>
                        <View style={[styles.loginBtn, {}]}>
                            <Text style={[styles.loginBtnText, { color: isDarkMode ? "#FFFFFF" : "#193238" }]}>New to AnimalMart? Register</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
};
const styles = StyleSheet.create({
    loginContainer: {
        display: "flex",
        alignItems: "center",
        height: height,
        width: width,
        padding: 20,
        gap: 15,
        paddingTop: 30
    },
    title: {
        fontSize: 22,
        fontWeight: "800",
        marginBottom: 25
    },
    inputConatiner: {
        display: "flex",
        gap: 10
    },
    loginInputContainer: {
        width: width,
        paddingHorizontal: 20,
        display: "flex",
        gap: 15
    },
    input: {
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16,
        height: 45
    },
    inputText: {
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 3
    },
    loginBtn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        width: width * .9,
        borderRadius: 6
    },
    loginBtnText: {
        color: "#ffffff",
        fontWeight: "500",
        fontSize: 16
    }
});

export default Login