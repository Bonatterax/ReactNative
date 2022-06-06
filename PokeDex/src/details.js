import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react'
import api from '../api'
import { useRoute, useNavigation, StackActions } from '@react-navigation/native' 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {ProgressView} from "@react-native-community/progress-view";
import { AntDesign } from '@expo/vector-icons'; 
import * as Progress from 'react-native-progress';

export default function Details(){
    const route = useRoute();
    const [pokeDesc, setPokeDesc] = useState()
    const navigation = useNavigation()

    const statusOne = route.params?.item.stats[0].base_stat/100
    const statusTwo = route.params?.item.stats[1].base_stat/100
    const statusThree = route.params?.item.stats[2].base_stat/100
    const statusFour = route.params?.item.stats[3].base_stat/100
    const statusFive = route.params?.item.stats[4].base_stat/100
    const statusSix = route.params?.item.stats[5].base_stat/100
 

    useEffect(() => {
        const url = `/pokemon-species/${route.params?.item.id}`
        api.get(url)
        .then(response => setPokeDesc(response.data.flavor_text_entries[15].flavor_text))
    }, [])

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

      function getBarStyle(type){
        if(type == 'grass'){
          return '#74CB48'
        }else if(type == 'fire'){
          return '#F57D31'
        }else if(type == 'water'){
          return '#6493EB'
        }else if(type == 'rock'){
          return '#B69E31'
        }else if(type == 'ghost'){
          return '#70559B'
        }else if(type == 'steel'){
          return '#B7B9D0'
        }else if(type == 'psychic'){
          return '#FB5584'
        }else if(type == 'ice'){
          return '#9AD6DF'
        }else if(type == 'dark'){
          return '#75574C'
        }else if(type == 'fairy'){
          return '#E69EAC'
        }else if(type == 'normal'){
          return '#AAA67F'
        }else if(type == 'fighting'){
          return '#C12239'
        }else if(type == 'flying'){
          return '#A891EC'
        }else if(type == 'poison'){
          return '#A43E9E'
        }else if(type == 'ground'){
          return '#DEC16B'
        }else if(type == 'bug'){
          return '#A7B723'
        }else if(type == 'electric'){
          return '#F9CF30'
        }else if(type == 'dragon'){
          return '#7037FF'
        }
      }
    
      
    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center',  backgroundColor: route.params?.background.backgroundColor}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.dispatch(StackActions.popToTop())}>
                <AntDesign name="arrowleft" size={26} color="white" />
            </TouchableOpacity>
              
              <Text style={styles.pokemonName}>{route.params?.item.name}</Text>
              {route.params?.item.id < 10 ? <Text style={styles.pokemonID}>#00{route.params?.item.id}</Text> : route.params?.item.id < 100 ? <Text style={styles.pokemonID}>#0{route.params?.item.id}</Text> : <Text style={styles.pokemonID}>#{route.params?.item.id}</Text>}
          </View>
            
            <Image source={{uri: route.params?.item.sprites.other.home.front_default}} style={{width: 300, height: 300}}></Image>
            
            <View style={styles.dataContainer}>
                <View style={styles.rowContainerTypes}>
                {route.params?.item.types.map(function(item, i){
                    return <TouchableWithoutFeedback style={[styles.types, getStyle(item.type.name)]}>
                        <Text style={{fontSize: 16, color: '#FFF', textTransform: 'capitalize', fontWeight: 'bold'}}t>{item.type.name}</Text>
                        </TouchableWithoutFeedback>
                })}
                </View>
            
                <Text style={[styles.about, getTextStyle(route.params?.item.types[0].type.name)]}>About</Text>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <View style={{flexDirection: 'column', marginRight: 20}}>
                      <Text>{route.params?.item.weight/10} kg</Text>
                      <Text>Weight</Text>
                  </View>

                  <View style={{flexDirection: 'column', marginRight: 20}}>
                      <Text>{route.params?.item.height/10} m</Text>
                      <Text>Height</Text>
                  </View>

                  
                  <View style={{flexDirection: 'column'}}>
                      <Text>{route.params?.item.moves[0].move.name}</Text>
                      <Text>{route.params?.item.moves[1].move.name}</Text>
                      <Text>Moves</Text>
                  </View>
                  
                </View>
                <Text style={{marginTop: 20}}>{pokeDesc}</Text>
                <Text style={[styles.about, getTextStyle(route.params?.item.types[0].type.name)]}>Base Stats</Text>
                <View style={styles.rowContainer}>
                    <Text style={[styles.stats, getTextStyle(route.params?.item.types[0].type.name)]}>HP</Text>
                    <Text style={styles.textRow}>{route.params?.item.stats[0].base_stat}</Text>
                    <Progress.Bar progress={statusOne} width={200} height={15} color={ getBarStyle(route.params?.item.types[0].type.name)}/>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={[styles.stats, getTextStyle(route.params?.item.types[0].type.name)]}>ATK</Text>
                    <Text style={styles.textRow}>{route.params?.item.stats[1].base_stat}</Text>
                    <Progress.Bar progress={statusTwo} width={200} height={15} color={ getBarStyle(route.params?.item.types[0].type.name)}/>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={[styles.stats, getTextStyle(route.params?.item.types[0].type.name)]}>DEF</Text>
                    <Text style={styles.textRow}>{route.params?.item.stats[2].base_stat}</Text>
                    <Progress.Bar progress={statusThree} width={200} height={15} color={ getBarStyle(route.params?.item.types[0].type.name)}/>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={[styles.stats, getTextStyle(route.params?.item.types[0].type.name)]}>SATK</Text>
                    <Text style={styles.textRow}>{route.params?.item.stats[3].base_stat}</Text>
                    <Progress.Bar progress={statusFour} width={200} height={15} color={ getBarStyle(route.params?.item.types[0].type.name)}/>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={[styles.stats, getTextStyle(route.params?.item.types[0].type.name)]}>SDEF</Text>
                    <Text style={styles.textRow}>{route.params?.item.stats[4].base_stat}</Text>
                    <Progress.Bar progress={statusFive} width={200} height={15} color={ getBarStyle(route.params?.item.types[0].type.name)}/>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={[styles.stats, getTextStyle(route.params?.item.types[0].type.name)]}>SPD</Text>
                    <Text style={styles.textRow}>{route.params?.item.stats[5].base_stat}</Text>
                    <Progress.Bar progress={statusSix} width={200} height={15} color={ getBarStyle(route.params?.item.types[0].type.name)}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    rowContainerTypes: {
        flexDirection: 'row'
    },
    types: {
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 5,
        width: 70,
        height: 20
    },
    about: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold'
    },
    textRow: {
        marginLeft: 10
    }, 
    pokemonName: {
        color: '#FFF', 
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 24, 
        marginLeft: 10
    },
    dataContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '95%',
        height: '61%',
        alignItems: 'center'
    },
    stats: {
        fontWeight: 'bold'
    },
    pokemonID: {
        color: '#FFF', 
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 180
    }
})