import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react';
import { Ionicons } from 'react-native-vector-icons';

const screenWidth = Dimensions.get('window').width;

const HomeBar = () => {
  return (
    <View style={styles.firstWrapeer}>
      <View style={styles.contentWrapper}>
        <Image source={require('../../images/fablogoicon.jpeg')} style={styles.logo} />
     </View>
     <View style={styles.contentWrapper}>
        <TouchableOpacity style={{paddingRight: 10}}>
            <Ionicons name="notifications" size={22} color="#111" />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingRight: 10}}>
            <Ionicons name="apps" size={22} color="#111" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('../../images/fablogoicon.jpeg')} style={styles.profileImage} />
        </TouchableOpacity>
     </View>
      </View>
  )
}

const styles = StyleSheet.create({
    firstWrapeer:{
        width: screenWidth,
        height: screenWidth/5,
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 6,
        shadowRadius: 2 ,
        shadowOffset : { width: 1, height: 2}
    },
    contentWrapper: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#59B782'
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#59B782'
    },
})

export default HomeBar