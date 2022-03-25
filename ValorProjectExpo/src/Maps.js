import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Image, SafeAreaView, FlatList} from 'react-native';
import AppLoading from 'expo-app-loading'
import axios from 'axios';

export default function Maps(){
    const [mapData, setMapData] = useState();
    const [mapDataHasLoaded, setMapDataHasLoaded] = useState(false);

    useEffect(async()=>{
        const response = await axios.get('https://valorant-api.com/v1/maps')
        .then(response => {
            setMapData(response.data)
        })
        setMapDataHasLoaded(true);
    },[])

    if(mapDataHasLoaded === false){
        return <AppLoading/>;
    }

    const renderItem = ({item}) => {
        return(
            <View style={{flexDirection: 'row', borderRadius: 4}}>
                <Image source={{uri: item.displayIcon}} style={{width: 60, height: 60}}/>
                <Text style={styles.textAgentName}>{item.displayName}</Text>
            </View>
           
        )
    }

    return(
        <View style={styles.container}>
            <FlatList
            data={mapData.data}
            renderItem={renderItem}
            keyExtractor={item => item.uuid}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});