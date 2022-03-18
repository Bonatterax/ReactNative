import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    function navegaSobre(){
        navigation.navigate('Sobre', {nome: 'Bruno', email: 'bonattibrunodm@gmail.com'})
    }
    return(
        <View style={styles.container}>
            <Button title="Ir para sobre" onPress={navegaSobre}></Button>
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