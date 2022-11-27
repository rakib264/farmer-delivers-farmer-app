import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigation } from './src/navigation/AppNavigation.jsx';
import { Provider } from 'react-redux'
import { store } from './src/redux/store.js'


export default function App() {
  return (
   <Provider store={store}>
     <AppNavigation /> 
   </Provider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
