import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, FlatList, ActivityIndicator } from 'react-native';
import firebase from './src/firebase';
import { useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  async function Logar(){
    await auth().signInWithEmailAndPassword(email, password)
    .then((value) => {
      alert('Bem vindo: ' + value.user.email)
      setUser(value.user.email)
    })
    .catch((error)=>{
    
        alert('Ops algo deu errado!')
        return;
      
    })

    setEmail('');
    setPassword('')
  }

  async function Logout(){
    await auth().signOut();
    setUser('')
    alert('Deslogado com Sucesso')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email</Text>
      <TextInput style={styles.input} underlineColorAndroid= 'transparent' onChangeText= {(texto) => setEmail(texto)} value={email}></TextInput>

      <Text style={styles.texto}>Senha</Text>
      <TextInput style={styles.input} underlineColorAndroid= 'transparent' onChangeText= {(texto) => setPassword(texto)} value={password}></TextInput>

      <Button title="Logar" onPress={Logar}>
      </Button>

      <Text style={{marginTop: 20, marginBottom: 20, fontSize: 23, textAlign: 'center'}}>{user}</Text>
      {user.length > 0 ? (
        
        <Button title="Logout" onPress={Logout}/>
      ) : (
        <Text>Nenhum usuário Logado</Text>
      )}
      

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
