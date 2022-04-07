import React from 'react';
import { View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/signin'

const AuthStack = createStackNavigator();


export default function AuthRoutes() {
 return (
   <AuthStack.Navigator>
       <AuthStack.Screen name="SignIn" component={SignIn}/>
   </AuthStack.Navigator>
  );
}