import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import success_icon from "../assets/Icons/success_alert.png";
import cross_icon from "../assets/Icons/cross_icon.png";
import AppContext from '../context/AppContext';


const { width, height } = Dimensions.get("screen");
const SuccessAlert = () => {
    const { isDarkMode } = useContext(AppContext);
    return (
        <View style={[styles.alertConatiner, { backgroundColor: isDarkMode ? "#20212D" : "#FFFFFF" }]}>
            <View style={styles.alertIcon}>
                <Image source={success_icon} />
            </View>
            <View style={styles.alertMessage}>
                <Text style={[styles.mainText, { color: isDarkMode ? "#FFFFFF" : "#193238" }]}>Registration Complete</Text>
                <Text style={[styles.subText, { color: isDarkMode ? "#7C7D90" : "#7E8A8C" }]}>Successfully registereds</Text>
            </View>
            <View style={styles.crossIcon}>
                <Image source={cross_icon} />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    alertConatiner: {
        width: width * .94,
        display: "flex",
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: "center",
        marginLeft: 5,
        borderRadius: 10
    },
    alertIcon: {
        marginRight: 10,
        width: 25,
        height: 25,
        objectFit: "contain"
    },
    alertMessage: {
        width: width * .76,
        marginLeft: 10
    },
    mainText: {
        fontSize: 16,
        color: "#193238",
        fontWeight: "500",
        fontFamily: "sans-serif",
        marginBottom: 3
    },
    subText: {
        color: "#7E8A8C",
        fontSize: 12,
        fontWeight: "400",
        fontFamily: "sans-serif"
    },
    crossIcon: {
        width: 20,
        height: 20,
        position: "relative",
        right: 20,
        objectFit: "contain"
    }
})


export default SuccessAlert