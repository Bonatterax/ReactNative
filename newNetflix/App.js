import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Main from './pages/mainpage';
import Details from './pages/details'

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{
          title: 'Tela Início',
          headerTitleAlign: 'center',
          headerStyle:{
            backgroundColor: '#121212',
            
          },
          headerTintColor: '#fff',
          headerShown: false
        }}/>
        <Stack.Screen name="Details" component={Details}/>
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