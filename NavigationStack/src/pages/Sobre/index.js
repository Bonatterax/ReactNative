import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native' 

export default function Sobre(){
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.nome === '' ? 'Pagina Sobre' : route.params?.nome
        })
    }, []);

    return(
        <View style={styles.container}>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>
            <Button title="Tela Contatos" onPress={() => navigation.navigate('Contato', {telefone: '93204-0884'})}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
});