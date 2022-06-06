import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from './src/home';
import Details from './src/details'

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Pokedex',
          headerTitleAlign: 'center',
          headerStyle:{
            backgroundColor: '#121212',
            
          },
          headerTintColor: '#fff'
        }}/>
        <Stack.Screen name='Details' component={Details} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});