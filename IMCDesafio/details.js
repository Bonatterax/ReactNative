import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView  } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ProgressCircle } from 'react-native-svg-charts'


export default function Details(){
    const [value, setValue] = useState(0);


    function calcIMC(){
        let peso = route.params?.peso;
        let altura = route.params?.altura;
        let imc = peso/(altura*altura);
        imc = imc.toFixed(2);

        return imc;
    }

    function calcPorcentagemIMC(){
        let imc = calcIMC();
        let porcentagem = (imc*100/40)/100;
        
        return porcentagem;
    }

    function getCategoriaIMC(){
        let imc = calcIMC();
        let categoria = '';

        if(imc < 20){
            categoria = 'Abaixo do Peso'
        }else if (imc >=20 && imc < 25){
            categoria = 'Peso Normal'
        }else if (imc >= 25 && imc < 30){
            categoria = 'Sobre Peso'
        }else if (imc >=30 && imc < 40){
            categoria = 'Obeso'
        }else{
            categoria = 'Obeso Mórbido'
        }
        return categoria;
    }

    const route = useRoute();    
    return(
        <View style={styles.container}>
            
            <Text style={styles.overallText}>Oi {route.params?.nome}! Você pesa {route.params?.peso} KG e mede {route.params?.altura} m!</Text>
            
            <ProgressCircle style={{ height: 200, width: 200, marginTop: 80 }} progress={calcPorcentagemIMC()} progressColor={'rgb(134, 65, 244)'} />
            <Text style={styles.textIMC}> IMC </Text>
            <Text style={styles.valueText}>{calcIMC()}</Text>
            <Text style={styles.categoriaIMC}>{getCategoriaIMC()}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3a3b3c',
        alignItems: 'center',
        paddingTop: 130
    },
    textIMC:{
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    valueText:{
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
    },
    overallText:{
        color: '#FFF',
        fontSize: 20
    },
    categoriaIMC:{
        color: '#FFF',
        fontSize: 25,
        marginTop: 50
    }
})