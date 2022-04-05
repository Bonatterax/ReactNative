import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Icons from 'react-native-vector-icons/Feather'

export default function TaskList(props){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{marginRight: 10}} onPress={() => props.deleteItem(props.data.key)}>
                <Icons name="trash" color="#FFF" size={20}/>
            </TouchableOpacity>
            
            <View style={{paddingRight: 10}}>
                <TouchableWithoutFeedback onPress={() => props.editItem(props.data)}>
                    <Text style={{color: '#FFF', paddingRight: 10}}>{props.data.nome}</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#121212',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 4,
    }
})