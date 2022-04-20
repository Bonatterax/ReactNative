import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import apitwo from '../services/apitwo'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Divider } from 'react-native-paper';

export default function Details(){
    const [details, setDetails] = useState([])
    const route = useRoute();
    
    console.log(route.params?.name)
    useEffect(async () => {
        const url = `${route.params?.name}`
        await apitwo.get(url)
        .then(response => {
            setDetails(response.data)
    })
    }, [])

    return(
        <View style={styles.container}>
            <Image style={{width: 400, height: 400}}source={{uri: details.Poster}}></Image>
            <View style={styles.flexRow}>
                <Text style={styles.category}>Elenco</Text>
                <Text style={styles.description}>{details.Actors}</Text>
            </View>
            <Divider style={{height: 15}} />
            <View style={styles.flexRow}>
                <Text style={styles.category}>Ano</Text>
                <Text style={styles.description}>{details.Year}</Text>
            </View>
            <Divider style={{height: 15}} />
            <View style={styles.flexRow}>
                <Text style={styles.category}>Diretor</Text>
                <Text style={styles.description}>{details.Director}</Text>
            </View>
            <Divider style={{height: 15}} />
            <View style={styles.flexRow}>
                <Text style={styles.category}>Gênero</Text>
                <Text style={styles.description}>{details.Genre}</Text>
            </View>
            <Divider style={{height: 15}} />
            <View style={styles.flexRow}>
                <Text style={styles.category}>País</Text>
                <Text style={styles.description}>{details.Country}</Text>
            </View>
            <Divider style={{height: 15}} />
            <View style={styles.flexRow}>
                <Text style={styles.category}>Duração</Text>
                <Text style={styles.description}>{details.Runtime}</Text>
            </View>
        </View>
    )
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
    },
    flexRow: {
        flexDirection: 'row'
    },
    category: {
        fontWeight: 'bold'
    },
    description: {
        marginLeft: 20,
    }
  });