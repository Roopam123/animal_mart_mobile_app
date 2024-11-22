import { View, Text, SafeAreaView, ScrollView, Image, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import register_img from "../../assets/images/register.png"
import AppContext from '../../context/AppContext';


const { width, height } = Dimensions.get("screen");
const Register = () => {
    const { isDarkMode } = useContext(AppContext);
    return (
        <SafeAreaView>
            <StatusBar
                backgroundColor={isDarkMode ? "#141414" : "#F6F8F9"}
                barStyle={isDarkMode ? "light-content" : "dark-content"}
            />
            <ScrollView>
                <View style={[styles.registerContainer, { backgroundColor: isDarkMode ? "#141414" : "#F6F8F9" }]}>
                    <View style={styles.registerTop}>
                        <Text style={[styles.registerTitle, { color: isDarkMode ? "#FFFFFF" : "#193238" }]}>Registration</Text>
                        <Image source={register_img} />
                        <View style={styles.content}>
                            <Text style={[styles.welconme, { color: isDarkMode ? "#FFFFFF" : "#193238" }]}>Welcome to AnimalMart!</Text>
                            <Text style={[styles.welconmeContent, { color: isDarkMode ? "#FFFFFF" : "#193238" }]}>Join our community of pet lovers and get access to exclusive deals, tips, and more. Register now to start your journey with AnimalMart.</Text>
                        </View>
                    </View>
                    <View style={styles.registerInputConatiner}>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.inputLable, { color: isDarkMode ? "#FFFFFF" : "#193238" }]}>Full Name</Text>
                            <TextInput
                                placeholder='Enter your full name'
                                style={[styles.input, { backgroundColor: isDarkMode ? "#2B2B2E" : "#EBEDED", color: isDarkMode ? "#FFFFFF" : "#193238" }]}
                                placeholderTextColor={isDarkMode ? "#98989F" : "#7E8A8C"}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.inputLable, { color: isDarkMode ? "#FFFFFF" : "#193238" }]}>Email Address</Text>
                            <TextInput
                                placeholder='Enter your email address'
                                style={[styles.input, { backgroundColor: isDarkMode ? "#2B2B2E" : "#EBEDED", color: isDarkMode ? "#FFFFFF" : "#193238" }]}
                                placeholderTextColor={isDarkMode ? "#98989F" : "#7E8A8C"}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.inputLable, { color: isDarkMode ? "#FFFFFF" : "#193238" }]}>Password</Text>
                            <TextInput
                                placeholder='Enter your password'
                                style={[styles.input, { backgroundColor: isDarkMode ? "#2B2B2E" : "#EBEDED", color: isDarkMode ? "#FFFFFF" : "#193238" }]}
                                placeholderTextColor={isDarkMode ? "#98989F" : "#7E8A8C"}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.inputLable, { color: isDarkMode ? "#FFFFFF" : "#193238" }]}>Location</Text>
                            <TextInput
                                placeholder='Enter your location'
                                style={[styles.input, { backgroundColor: isDarkMode ? "#2B2B2E" : "#EBEDED", color: isDarkMode ? "#FFFFFF" : "#193238" }]}
                                placeholderTextColor={isDarkMode ? "#98989F" : "#7E8A8C"}
                            />
                        </View>
                        <View>
                            <TouchableOpacity>
                                <View style={[styles.registerBtn, { backgroundColor: isDarkMode ? "#1E5CE4" : "#17C6ED" }]}>
                                    <Text style={styles.registerBtnText}>Register</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={[styles.alredyAccountText, { color: isDarkMode ? "#ffffff" : "#193238" }]}>Already have an account? Log in</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    registerContainer: {
        display: "flex",
        width: width,
        paddingTop: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    registerTop: {
        width: width * .9,
        display: "flex",
        alignItems: "center",
        gap: 30
    },
    registerTitle: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 24
    },
    content: {
        width: width * .9,
        display: "flex",
        justifyContent: "center",
        gap: 5
    },
    welconme: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "700"

    },
    welconmeContent: {
        textAlign: "center",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 20
    },
    inputLable: {
        fontWeight: "500",
        fontSize: 16,
        marginLeft: 4
    },
    input: {
        paddingVertical: 12,
        width: width * .95,
        paddingLeft: 10,
        height: 50,
        borderRadius: 5
    },
    inputContainer: {
        display: "flex",
        gap: 10
    },
    registerInputConatiner: {
        marginTop: 60,
        marginBottom: 80,
        display: "flex",
        gap: 30
    },
    registerBtn: {
        paddingVertical: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    registerBtnText: {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 16
    },
    alredyAccountText: {
        fontWeight: "400",
        marginLeft: 3,
        marginTop: 4
    }
});

export default Register