import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, FlatList, ActivityIndicator } from 'react-native';
import firebase from './firebase';
import { useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function Home(){
    const navigation = useNavigation();    
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  async function Logar(){
    if(email!= null & password != null) {
        await auth().signInWithEmailAndPassword(email, password)
    .then((value) => {
      alert('Bem vindo: ' + value.user.email)
      setUser(value.user.email)
        navigation.navigate('AfterLogin')
    })
    .catch((error)=>{
    
        alert(error)
        return;
      
    })

    setEmail('');
    setPassword('')

    
    }
    
  }




  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email</Text>
      <TextInput style={styles.input} underlineColorAndroid= 'transparent' onChangeText= {(texto) => setEmail(texto)} value={email}></TextInput>

      <Text style={styles.texto}>Senha</Text>
      <TextInput style={styles.input} underlineColorAndroid= 'transparent' onChangeText= {(texto) => setPassword(texto)} value={password}></TextInput>

      <Button title="Logar" onPress={Logar}>
      </Button>

     

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    texto: {
      fontSize: 20
    },
    input:{
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#121212',
      height: 45,
      fontSize: 17
    }
  });