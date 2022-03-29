import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, FlatList, ActivityIndicator } from 'react-native';
import firebase from './src/firebase';
import { useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/home'
import AfterLogin from './src/afterLogin'

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="AfterLogin" component={AfterLogin}/>
      </Stack.Navigator>
    </NavigationContainer>
  )


}


