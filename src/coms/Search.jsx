import { View, Text, TextInput, Alert, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
// import { useDispatch } from 'react-redux';
// import { onSearchFoods } from '../redux/features/shoppingSlice';

const screenWidth = Dimensions.get('window').width

export const Search = ( {navigation} ) => {
    const [searchText, setSearchText] = useState('');
    // const dispatch = useDispatch();

    const onTap = (searchText) => {
        console.log(searchText)
        // dispatch(onSearchFoods(searchText));
        // setSearchText('');
        // navigation.navigate('SearchStack');
    }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput placeholder='Search Anything...' 
                   value={searchText} 
                   onChangeText={(text) => setSearchText(text)}
                   autoFocus={true}
                   style={styles.textInput}
                     />  
       <TouchableOpacity onPress={() => onTap(searchText)} style={styles.iconStyle}>
         <Ionicons name="options" size={28} color="white" />
       </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        position: 'relative'
    },
    wrapper: {
        width: screenWidth - 30,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInput: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '83%',
        height: '100%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FD6A65',
        backgroundColor: 'white',
    },
    iconStyle: {
        width: 50,
        height: 50,
        marginLeft: 4,
        marginRight: 9,
        backgroundColor: '#FD6A65',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
})

