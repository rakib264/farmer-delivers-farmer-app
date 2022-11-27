import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Dimensions } from 'react-native'
import React from 'react';
import { Ionicons } from 'react-native-vector-icons'

const { width, height} = Dimensions.get('window');

const LandingScreen = ({ navigation }) => {
    const onTap = () => {
        navigation.navigate('LoginStack')
    }
  return (
    <View style={styles.container}>
     <View style={{ flex: 1, paddingBottom: 10, position: 'relative'}}>
        <Image source={require('../images/farms/farm8.jpeg')} 
        style={styles.backImg} resizeMode="cover" />
         <Image source={require('../images/fablogoicon.jpeg')} 
        style={styles.logoIcon} resizeMode="cover" />
     </View>
     <View  style={{ flex: 1,}}>
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingVertical: 70,}}>
        <View style={{ paddingVertical: height * .1, }}>
        <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Manage Your Farm</Text>
        <Text style={{ paddingVertical: 15, fontSize: 14, color: '#E5EEEB', textAlign: 'center'}}>Get updated width the system indicators and sensory data. Our data driven platform make your farm more convenient to maintain. Stay connected with us</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={onTap}>
            <Text style={styles.btnText}>Get Started</Text>
            <Ionicons name="arrow-forward-outline" size={22} color="white" />
        </TouchableOpacity>
        </View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0B4128',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backImg: {
        width: width,
        height: height * .6,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    logoIcon:{
        width: 60,
        height: 60,
        borderRadius: 100,
        position: 'absolute',
        left: width/2 - 25,
        top: height * .58,
        borderWidth: 5,
        borderColor: '#E5EEEB',
    },
    btn:{
        width: '70%',
        height: 50,
        backgroundColor: '#229778',
        padding: 10,
        borderRadius: 20,
        // borderWidth: 2,
        // borderColor: '#CAF9F2'
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    btnText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    }

  });
  

export default LandingScreen