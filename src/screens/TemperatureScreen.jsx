import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const TemperatureScreen = ({ navigation }) => {
    const onTapBack = () => {
        navigation.goBack()
    }
  return (
    <View style={styles.container}>
     <View style={styles.wrapper}>
     <View style={styles.firstWrapper}>
     <TouchableOpacity style={styles.backButton} onPress={onTapBack}>
        <Ionicons name='chevron-back' size={30} color="#474E68" />
     </TouchableOpacity>
     <TouchableOpacity style={styles.backButton} onPress={onTapBack}>
        <Ionicons name='ellipsis-vertical' size={30} color="#474E68" />
     </TouchableOpacity>
     </View>
     </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        paddingTop: 40,
        paddingBottom: 10
    },
    wrapper:{
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: '#086972',
    },
    firstWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backButton:{
        backgroundColor: "white",
        width: 40,
        height: 40,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 6,
        shadowRadius: 2 ,
        shadowOffset : { width: 1, height: 2},
    },
})

export default TemperatureScreen