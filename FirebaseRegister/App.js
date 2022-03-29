import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, FlatList, ActivityIndicator } from 'react-native';
import firebase from './src/firebase';
import { useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function cadastrar(){
    await auth().createUserWithEmailAndPassword(email, password)
    .then((value) => {
      alert('Usuario criado' + value.user.email)
    })
    .catch((error)=>{
      if(error.code === 'auth/weak-password'){
        alert('Sua senha deve ter pelo menos 6 caracteres'); 
        return;
      }
      if(error.code === 'auth/invalid-email'){
        alert('Email inválido')
        return;
      }else{
        alert('Ops algo deu errado!')
        return;
      }
    })

    setEmail('');
    setPassword('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email</Text>
      <TextInput style={styles.input} underlineColorAndroid= 'transparent' onChangeText= {(texto) => setEmail(texto)} value={email}></TextInput>

      <Text style={styles.texto}>Senha</Text>
      <TextInput style={styles.input} underlineColorAndroid= 'transparent' onChangeText= {(texto) => setPassword(texto)} value={password}></TextInput>

      <Button title="Cadastrar" onPress={cadastrar}>
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
