import React from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native';
import Login from './src/Login'
import MainPage from './src/Mainpage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App(){
    return(
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
         <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
       </Stack.Navigator>
     </NavigationContainer>
     
    )
}

