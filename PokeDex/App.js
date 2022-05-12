import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useState, useEffect } from 'react'
import api from './api'

export default function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [pokeDetails, setPokeDetails] = useState([])
  const [quant, setQuant] = useState(0)
  const [test, setTest] = useState()

  useEffect(() => {
    const url = `pokemon?limit=1500&offset=${quant}`
    api.get(url)
    .then(response => setPokemonList(response.data.results))
    
    if(pokemonList) {
        const array = pokemonList
        for(i=0;i<array.length;i++){
            const url = `pokemon/${array[i].name}`
            api.get(url)
            .then(response => setPokeDetails(response.data))
        }
    }
    console.log(pokeDetails)
  },[pokemonList])




  function _renderItem({item,index}){
    const url = item.url
    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`

    return (
      <View style={{height: 300, width:300, borderWidth: 2, borderColor: '#131313', borderRadius: 10, marginRight: 100, marginLeft: 50}}>
        <View style={styles.secondColor}>
          <Image source={{uri: imageUrl}} style={{height: 200, width: 200, marginTop: 80}}/>
          <Text style={styles.pokemonName}>{item.name}</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>#{pokemonNumber}</Text>
        </View>
      </View>
    )
}

  return (
    <View style={styles.container}>
      <FlatList
      data={pokemonList}
      keyExtractor={item => item.url}
      renderItem={_renderItem}
      horizontal
      contentContainerStyle={{marginTop: 200}}
      >


      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  secondColor: {
    height: 150,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#298329',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pokemonName: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  }
});
