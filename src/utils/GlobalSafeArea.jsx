import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: '#F8FAFF', //#F8FAFF
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})