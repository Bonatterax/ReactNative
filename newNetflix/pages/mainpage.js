import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../services/api'
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [movies, setMovies] = useState([])
  const navigation = useNavigation();

  function navigateDetails(movieName){
      navigation.navigate('Details', {name: movieName})
  }

  useEffect(async () => {
    const url = 'avengers'
    await api.get(url)
    .then(response => {
      setMovies(response.data.Search)
    })
  }, [])

  function _renderItem({item,index}){
    return (
      <TouchableOpacity onPress={() => navigateDetails(item.Title)}>
          <View style={{
          backgroundColor:'#131313',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
          alignItems: 'center',
          justifyContent: 'center' }}>
        <Image style={{width: 250, height: 230}} source={{uri: item.Poster}}/>
        <Text style={{fontSize: 15, fontWeight: 'bold', paddingBottom: 10, color: '#FFF'}}>{item.Title}</Text>
        </View>
      </TouchableOpacity>
      

    )
}

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#fff', paddingTop: 250, alignItems: 'center' }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 30}}>Choose your movie</Text>
    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center' }}>
        <Carousel
          layout={"default"}
          data={movies}
          sliderWidth={300}
          itemWidth={300}
          renderItem={_renderItem}
           />
    </View>
  </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
