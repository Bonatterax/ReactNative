import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import { useState, useEffect } from 'react'
import api from '../api'
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [orderedList, setOrderedList] = useState([])
  const [shouldRender, setShouldRender] = useState(true)
  const [initialDex, setInitialDex] = useState(1)
  const[finalDex, setFinalDex] = useState(20)
  const navigation = useNavigation();

  useEffect(() => {
    if(shouldRender){
      for( let i = initialDex; i<finalDex; i++) {
        const url = `/pokemon/${i}`
        api.get(url)
        .then(response => setPokemonList(oldArray => [...oldArray, response.data]))
      }
    }
    setShouldRender(false)
  },[shouldRender])

  useEffect(() => {
    if(pokemonList) {
     const ordered = pokemonList.sort(function(a,b) {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      });

      setOrderedList(ordered)
    }
  }, [pokemonList])

  const onEnd = () => {
    const initial = initialDex+20
    const final = finalDex + 20
    setInitialDex(initial)
    setFinalDex(final)
    setShouldRender(true)
  }
  
  function getStyle(type){
    if(type == 'grass'){
      return { backgroundColor: '#74CB48'}
    }else if(type == 'fire'){
      return {backgroundColor: '#F57D31'}
    }else if(type == 'water'){
      return {backgroundColor: '#6493EB'}
    }else if(type == 'rock'){
      return {backgroundColor: '#B69E31'}
    }else if(type == 'ghost'){
      return {backgroundColor: '#70559B'}
    }else if(type == 'steel'){
      return {backgroundColor: '#B7B9D0'}
    }else if(type == 'psychic'){
      return {backgroundColor: '#FB5584'}
    }else if(type == 'ice'){
      return {backgroundColor: '#9AD6DF'}
    }else if(type == 'dark'){
      return {backgroundColor: '#75574C'}
    }else if(type == 'fairy'){
      return {backgroundColor: '#E69EAC'}
    }else if(type == 'normal'){
      return {backgroundColor: '#AAA67F'}
    }else if(type == 'fighting'){
      return {backgroundColor: '#C12239'}
    }else if(type == 'flying'){
      return {backgroundColor: '#A891EC'}
    }else if(type == 'poison'){
      return {backgroundColor: '#A43E9E'}
    }else if(type == 'ground'){
      return {backgroundColor: '#DEC16B'}
    }else if(type == 'bug'){
      return {backgroundColor: '#A7B723'}
    }else if(type == 'electric'){
      return {backgroundColor: '#F9CF30'}
    }else if(type == 'dragon'){
      return {backgroundColor: '#7037FF'}
    }
  }

  function getBorderStyle(type){
    if(type == 'grass'){
      return { borderColor: '#74CB48'}
    }else if(type == 'fire'){
      return {borderColor: '#F57D31'}
    }else if(type == 'water'){
      return {borderColor: '#6493EB'}
    }else if(type == 'rock'){
      return {borderColor: '#B69E31'}
    }else if(type == 'ghost'){
      return {borderColor: '#70559B'}
    }else if(type == 'steel'){
      return {borderColor: '#B7B9D0'}
    }else if(type == 'psychic'){
      return {borderColor: '#FB5584'}
    }else if(type == 'ice'){
      return {borderColor: '#9AD6DF'}
    }else if(type == 'dark'){
      return {borderColor: '#75574C'}
    }else if(type == 'fairy'){
      return {borderColor: '#E69EAC'}
    }else if(type == 'normal'){
      return {borderColor: '#AAA67F'}
    }else if(type == 'fighting'){
      return {borderColor: '#C12239'}
    }else if(type == 'flying'){
      return {borderColor: '#A891EC'}
    }else if(type == 'poison'){
      return {borderColor: '#A43E9E'}
    }else if(type == 'ground'){
      return {borderColor: '#DEC16B'}
    }else if(type == 'bug'){
      return {borderColor: '#A7B723'}
    }else if(type == 'electric'){
      return {borderColor: '#F9CF30'}
    }else if(type == 'dragon'){
      return {borderColor: '#7037FF'}
    }
  }

  function getTextStyle(type){
    if(type == 'grass'){
      return {color: '#74CB48'}
    }else if(type == 'fire'){
      return {color: '#F57D31'}
    }else if(type == 'water'){
      return {color: '#6493EB'}
    }else if(type == 'rock'){
      return {color: '#B69E31'}
    }else if(type == 'ghost'){
      return {color: '#70559B'}
    }else if(type == 'steel'){
      return {color: '#B7B9D0'}
    }else if(type == 'psychic'){
      return {color: '#FB5584'}
    }else if(type == 'ice'){
      return {color: '#9AD6DF'}
    }else if(type == 'dark'){
      return {color: '#75574C'}
    }else if(type == 'fairy'){
      return {color: '#E69EAC'}
    }else if(type == 'normal'){
      return {color: '#AAA67F'}
    }else if(type == 'fighting'){
      return {color: '#C12239'}
    }else if(type == 'flying'){
      return {color: '#A891EC'}
    }else if(type == 'poison'){
      return {color: '#A43E9E'}
    }else if(type == 'ground'){
      return {color: '#DEC16B'}
    }else if(type == 'bug'){
      return {color: '#A7B723'}
    }else if(type == 'electric'){
      return {color: '#F9CF30'}
    }else if(type == 'dragon'){
      return {color: '#7037FF'}
    }
  }
  return(
    <View style={styles.container}>
    <FlatList
    data={orderedList}
    idExtractor={item => item.id}
    numColumns={3}
    renderItem={({item}) => (
      <TouchableOpacity onPress={() => navigation.navigate('Details', {item: item, background: getStyle(item.types[0].type.name)})}>
      <SafeAreaView style={[styles.containerPokes, getBorderStyle(item.types[0].type.name)]}>
        <View style={styles.containerColor}>
          <View style={styles.cardTitle}>
            {item.id < 10 ? <Text style={[styles.cardID, getTextStyle(item.types[0].type.name)]}>#00{item.id}</Text> : item.id < 100 ? <Text style={[styles.cardID, getTextStyle(item.types[0].type.name)]}>#0{item.id}</Text> : <Text style={[styles.cardID, getTextStyle(item.types[0].type.name)]}>#{item.id}</Text>}
              
          </View>
          <Image source={{uri: item.sprites.front_default}} style={{width: 100, height: 100}}></Image>
        </View>
        <View style={[styles.containerOtherColor, getStyle(item.types[0].type.name)] }>
          <Text style={styles.pokeName}>{item.name}</Text>
        </View>
      </SafeAreaView>
      </TouchableOpacity>
  )}
  onEndReached={onEnd}
    />
    </View>
  )

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 5
  },
  containerPokes: {
    borderWidth: 2,
    width: 120,
    height: 180,
    borderRadius: 8,
    marginTop: 30,
    marginLeft: 10
  },
  cardTitle: {
    flexDirection: 'row',
  },
  pokeName:{
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#FFF',
    marginTop: 10
  },
  cardID:{
    fontSize: 20,
    fontWeight: 'bold',
  }, 
  containerColor: {
    height: '80%',
    alignItems: 'center'
  },
  containerOtherColor: {
    height: '20%',
    alignItems: 'center'
  }
});
