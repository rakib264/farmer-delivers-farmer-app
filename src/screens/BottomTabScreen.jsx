import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './AccountScreen.jsx';
import { Ionicons } from '@expo/vector-icons';
import OrderScreen from './OrderScreen.jsx';
import ProductScreen from './ProductScreen.jsx';
import HomeScreen from './HomeScreen.jsx';

const windowHeight = Dimensions.get('screen').height;


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
     screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if(route.name === 'Home'){
                iconName = focused ? 'home' : 'home-outline';
            } else if(route.name === 'Product'){
                iconName = focused ? 'flower' : 'flower-outline';
            } else if(route.name === 'Order'){
                iconName = focused ? 'basket' : 'basket-outline';
            }else if(route.name === 'Account'){
                iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} color={color} size={size} />
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarStyle: {backgroundColor: '#FD6A65'}
     })
    }
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Order" component={OrderScreen} />
        <Tab.Screen name="Product" component={ProductScreen} options={{tabBarBadge: 3, tabBarBadgeStyle: {backgroundColor: '#00ABB3', color: 'white',}}} />
        <Tab.Screen name="Account" component={AccountScreen} />
     </Tab.Navigator>
  )
}

export default BottomTabNavigator

