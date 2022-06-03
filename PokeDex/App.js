import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react'
import api from './api'

export default function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    for( let i = 1; i< 20; i++) {
      const url = `/pokemon/${i}`
      api.get(url)
      .then(response => setPokemonList(oldArray => [...oldArray, response.data]))
    }
    if(pokemonList){
      console.log(pokemonList)
    }
  },[])


  return(
    <FlatList
    data={pokemonList}
    idExtractor={item => item.id}
    renderItem={({item}) => (
      <SafeAreaView style={styles.container}>
        <Text>{item.name}</Text>
        <Image source={{uri: item.sprites.front_default}} style={{width: 30, height: 30}}></Image>
      </SafeAreaView>
  )}
    />
  )

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
