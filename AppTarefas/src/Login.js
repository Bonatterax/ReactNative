import React, {useState}from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import firebase from './firebase';

export default function Login( {changeStatus}){
    const [type, setType] = useState('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleLogin(){
        if(type === 'login'){
            //Login
            const user = firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                changeStatus(user.user.uid)
            })
            .catch((err) => {
                console.log(err);
                alert('Ops parece que deu algum erro');
                return;
            })
        }else{
            //Cadastro
            const user = firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                changeStatus(user.user.uid)
            })
            .catch((err) => {
                console.log(err);
                alert('Ops parece que deu algum erro');
                return;
            })
        }
    }

  return(
    <SafeAreaView style={styles.container}>
      <TextInput
      placeholder="Seu email"
      style={styles.input}
      value={email}
      onChangeText = {(text) => setEmail(text)}
      />
      <TextInput
      placeholder="********"
      style={styles.input}
      value={password}
      onChangeText = {(text) => setPassword(text)}
      />

        <TouchableOpacity style={styles.handleLogin} onPress={handleLogin}>
            <Text style={{color: '#FFF', fontSize: 17}}>{type === 'login' ? 'Acessar' : 'Cadastrar'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => setType(type => type === 'login' ? 'cadastrar' : 'login')}>
            <Text style={{textAlign: 'center'}}>{type === 'login' ? 'Criar uma Conta' : 'Já possuo uma conta'}</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#F2f6fc',
        paddingHorizontal: 10
    },
    input:{
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
        height: 45, 
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414'
    },
    handleLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141414',
        height: 45,
        marginBottom: 10
    }
})