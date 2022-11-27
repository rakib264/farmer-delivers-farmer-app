import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import LandingScreen from "../screens/LandingScreen.jsx";
import BottomTabNavigator from '../screens/BottomTabScreen.jsx';
import SignInScreen from "../screens/AccountScreen.jsx";


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="LandingStack" screenOptions={{headerShown: false}}>
                        <Stack.Screen name='LandingStack' component={LandingScreen}  />
                        <Stack.Screen name='HomeStack' component={BottomTabNavigator}  />
                        <Stack.Screen name='LoginStack' component={SignInScreen}  />
                    </Stack.Navigator>
                </NavigationContainer>  
    )
}

export { AppNavigation };