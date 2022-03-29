import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, FlatList, ActivityIndicator } from 'react-native';
import firebase from './firebase';
import { useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function AferLogin(){
    return(
        <Text>Oi</Text>
    )
}