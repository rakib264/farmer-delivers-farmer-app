import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react';
import { Ionicons } from 'react-native-vector-icons';

const screenWidth = Dimensions.get('window').width;

const HomeStatusBar = () => {
  return (
        <View style={styles.firstWrapeer}>
      <View style={{}}>
        <Text style={styles.titleStyleOne}>Hello, <Text style={styles.titleStyleTwo}>Rahim</Text></Text>
        <Text style={styles.subTitleStyle}>10 july, 2022</Text>
     </View>
     <View style={styles.contentWrapperTwo}>
        <TouchableOpacity style={styles.btnBack}>
            <Ionicons name="notifications" size={18} color="#111" />
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingLeft: 5}}>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    contentWrapperTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    titleStyleOne:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    titleStyleTwo:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffcdab'
    },
    subTitleStyle:{
        fontSize: 14,
        color: '#AEC09A'
    },
    btnBack: {
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor : 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.4,
        elevation: 6,
        shadowRadius: 2 ,
        shadowOffset : { width: 1, height: 2},
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

export default HomeStatusBar