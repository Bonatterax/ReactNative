import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, FlatList, ActivityIndicator } from 'react-native';
import firebase from './src/firebase';
import { useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import Listagem from './src/listagem'

export default function App() {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=> {
    async function getData(){
      //Cria um nó  
      //await database().ref('tipo').set('Cliente');

      //Remove um nó
      //await database().ref('tipo').remove();

      /*await database().ref('usuarios').child('3').set({
        nome: 'Giulia',
        idade: '16'
      })*/

      /*await database().ref('usuarios').child('3').update({
        nome: 'Giulia Bonatti'
      })*/
    
      await database().ref('usuarios').on('value', (snapshot) =>{
        setUsuarios([]);

        snapshot.forEach((childItem) => {
          let data = {
            key: childItem.key,
            nome: childItem.val().nome,
            cargo: childItem.val().cargo
          };

          setUsuarios(oldArray => [...oldArray, data].reverse())
        })
      })
        setLoading(false);
    }

    getData();
  }, [])


  async function cadastrar(){
    if(nome!== '' & cargo !== ''){
      let usuarios = await firebase.database().ref('usuarios');
      let key = usuarios.push().key;
      
      usuarios.child(key).set({
        nome: nome,
        cargo: cargo
      });

      alert('Cadastrado com Sucesso!');
      setNome('');
      setCargo('');
    }else{
      alert('Você precisa preencher todos os dados!')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput style={styles.input} underlineColorAndroid= 'transparent' onChangeText= {(texto) => setNome(texto)} value={nome}></TextInput>

      <Text style={styles.texto}>Cargo</Text>
      <TextInput style={styles.input} underlineColorAndroid= 'transparent' onChangeText= {(texto) => setCargo(texto)} value={cargo}></TextInput>

      <Button title="Novo Funcionário" onPress={cadastrar}>
      </Button>


      {loading?(
        <ActivityIndicator color='#121212' size={45}/>
      ) : (
        <FlatList
      keyExtractor={item => item.key}
      data={usuarios}
      renderItem={({item})=>(<Listagem data={item}/>) }
      />
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
