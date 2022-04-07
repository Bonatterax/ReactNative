import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import firebase from './src/services/firebase'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import Routes from './src/routes/index'
import {NavigationContainer} from '@react-navigation/native'


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#131313" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
      
    
  );
}

