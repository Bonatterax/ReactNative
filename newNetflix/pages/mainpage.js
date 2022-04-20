import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../services/api'
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [movies, setMovies] = useState([])
  const [dcMovies, setDcMovies] = useState([])
  const [american, setAmerican] = useState([])
  const [copa, setCopa] = useState([])
  const [hangover, setHangover] = useState([])

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

  useEffect(async () => {
    const url = 'batman'
    await api.get(url)
    .then(response => {
      setDcMovies(response.data.Search)
    })
  }, [])

  useEffect(async () => {
    const url = 'american'
    await api.get(url)
    .then(response => {
      setAmerican(response.data.Search)
    })
  }, [])

  useEffect(async () => {
    const url = 'copa'
    await api.get(url)
    .then(response => {
      setCopa(response.data.Search)
    })
  }, [])

  useEffect(async () => {
    const url = 'hangover'
    await api.get(url)
    .then(response => {
      setHangover(response.data.Search)
    })
  }, [])


  function _renderItem({item,index}){
    return (
      <TouchableOpacity onPress={() => navigateDetails(item.Title)}>
          <View style={{
          backgroundColor:'#131313',
          borderRadius: 5,
          height: 250,
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
    <SafeAreaView style={{flex: 1, backgroundColor:'#131313', paddingTop: 70 }}>
    <ScrollView>
      <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 30, color: '#FFF', marginLeft: 30, marginTop: 20}}>Marvel</Text>
    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center' }}>
        <Carousel
          layout={"default"}
          data={movies}
          sliderWidth={300}
          itemWidth={300}
          renderItem={_renderItem}
           />
    </View>
    <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 30, color: '#FFF', marginLeft: 30,  marginTop: 20}}>DC</Text>
    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center' }}>
    <Carousel
          layout={"default"}
          data={dcMovies}
          sliderWidth={300}
          itemWidth={300}
          renderItem={_renderItem}
           />
    </View>
    <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 30, color: '#FFF', marginLeft: 30,  marginTop: 20}}>American</Text>
    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center' }}>
    <Carousel
          layout={"default"}
          data={american}
          sliderWidth={300}
          itemWidth={300}
          renderItem={_renderItem}
           />
    </View>
    <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 30, color: '#FFF', marginLeft: 30,  marginTop: 20}}>A copa do mundo é nossa</Text>
    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center' }}>
    <Carousel
          layout={"default"}
          data={copa}
          sliderWidth={300}
          itemWidth={300}
          renderItem={_renderItem}
           />
    </View>
    <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 30, color: '#FFF', marginLeft: 30,  marginTop: 20}}>Sessão Ressaca</Text>
    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center' }}>
    <Carousel
          layout={"default"}
          data={hangover}
          sliderWidth={300}
          itemWidth={300}
          renderItem={_renderItem}
           />
    </View>
    </ScrollView>
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
