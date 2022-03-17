import React, {useState, useMemo, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Keyboard} from 'react-native';
import api from './src/Services/api'

export default function App (){
  const[cep,setCep] = useState('');
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);

  function limpar(){
    setCep('');
    setCepUser(null);
    inputRef.current.focus();
  }

  async function buscar(){
    if(cep == '' || cep.length < 8){
      alert('Digite um cep válido');
      setCep('');
      return;
    }


    try{
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();
    }catch(error){
      console.log('ERROR:' + error);
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput style={styles.input} placeholder='Ex: 05453010' value={cep} onChangeText={(texto)=>setCep(texto)} keyboardType='numeric' ref={inputRef}></TextInput>
      </View>
      
      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao,{backgroundColor: '#1d75cd'}]}
        onPress={buscar}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao,{backgroundColor: '#cd3e1d'}]}
        onPress ={limpar}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser &&
         <View style={styles.itemView}>
         <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
         <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
         <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
         <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
         <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
       </View>
      }
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    text:{
      marginTop: 25,
      marginBottom: 15,
      fontSize: 25,
      fontWeight: 'bold'
    },
    input:{
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#DDD',
      borderRadius: 5,
      width: '80%',
      padding: 10,
      fontSize: 18,
    },
    areaBtn:{
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 15,
      justifyContent: 'space-around'
    },
    botao: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 5,
    },
    botaoText:{
      fontSize: 22,
      color: '#FFF'
    },
    itemView:{
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
    },
    itemText:{
      fontSize: 22
    }
});