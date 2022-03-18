import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useRoute, useNavigation, StackActions} from '@react-navigation/native'

export default function Contato(){
    const navigation = useNavigation();
    const route = useRoute();

    function handleHome(){
        navigation.dispatch(StackActions.popToTop())
    }

    return(
        <View>
            <Text>{route.params?.telefone}</Text>
            <Button title='Voltar Home' onPress={handleHome}></Button>
        </View>
    )
}