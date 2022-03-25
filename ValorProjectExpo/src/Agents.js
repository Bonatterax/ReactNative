import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Image, SafeAreaView, FlatList} from 'react-native';
import AppLoading from 'expo-app-loading'
import axios from 'axios';


export default function Agents(){
    const [agentData, setAgentData] = useState();
    const [agentDataHasLoaded, setAgentDataHasLoaded] = useState(false);

    useEffect(async()=>{
        const response = await axios.get('https://valorant-api.com/v1/agents')
        .then(response => {
            setAgentData(response.data)
        })
        setAgentDataHasLoaded(true);
    },[])

    if(agentDataHasLoaded === false){
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
            data={agentData.data}
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
    },
    textAgentName:{
        fontSize: 25,
        marginTop:20,
        marginLeft: 15
    }
});