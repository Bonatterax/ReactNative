import React from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Login(){

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../riot-games-logo.png')} resizeMode = 'center' style={{width: 150, height: 150, marginTop: 150}}/>
        </View>

        <View style={styles.containerForm}>
          <Text style={styles.title}>User</Text>
          <TextInput placeholder='Your @' style={styles.input}/>
          <Text style={styles.title}>Password</Text>
          <TextInput placeholder= '*****' style={styles.input}/>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>
            <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
        </View>
      
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000'
    },
    containerForm: {
      backgroundColor: '#FFF',
      borderRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
      height: 300
    },
    title:{
      fontSize: 20,
      marginTop: 28,
      color: '#000'
    },
    input:{
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16
    },
    button:{
      backgroundColor: '#000',
      width: '100%',
      borderRadius: 20,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText:{
      color: '#d22a36',
      fontSize: 18,
      fontWeight: 'bold'
    }
  
    
  
  })