import React from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Image, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Agents from './Agents';
import Maps from './Maps';
import Feather from 'react-native-vector-icons/Feather';


export default function MainPage(){
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer independent = {true}>
            <Tab.Navigator options={{
                tabBarActiveTintColor: '#d22a36',
                tabBarInactiveTintColor: '#d22a36',
            }}>
                <Tab.Screen name="Agents" component={Agents} options={{
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="user" color={'#d22a36'} size={size}/>
                    }
                }}/>
                <Tab.Screen name="Maps" component={Maps} options={{
                    tabBarIcon: ({color, size}) =>{
                        return <Feather name="map" color={'#d22a36'} size={size}/>
                    }
                    
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});