import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
    
  const[nome,setNome] = useState('');
  const[peso,setPeso] = useState('');
  const[altura,setAltura] = useState('');
  const navigation = useNavigation();

  function limpar(){
    setNome('');
    setPeso('');
    setAltura('');
  }

  function validarDados(){
    if(nome === '' || peso === '' || altura == ''){
        alert('Você deve preencher todos os campos!');
    }else{
        navigation.navigate('Details', {nome: nome, peso: peso, altura:altura})
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#fff" keyboardType='default' value={nome} onChangeText={(texto)=>setNome(texto)}></TextInput>
      <TextInput style={styles.input} placeholder="Peso (ex: 60.5)" placeholderTextColor="#fff"  keyboardType='numeric' value={peso} onChangeText={(texto)=>setPeso(texto)}></TextInput>
      <TextInput style={styles.input} placeholder="Altura (ex: 1.83)" placeholderTextColor="#fff" keyboardType='decimal-pad' value={altura} onChangeText={(texto)=>setAltura(texto)}></TextInput>
     
    <View style={styles.viewButtons}>
      <TouchableOpacity style={styles.button} onPress={limpar}>
          <Text>Limpar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={validarDados}>
        <Text style={styles.calcText}>Calcular IMC</Text>
      </TouchableOpacity>
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a3b3c',
    alignItems: 'center',
    paddingTop: 130
  },
  input:{
    backgroundColor: '#3a3b3c',
      borderWidth: 1,
      borderColor: '#DDD',
      borderRadius: 5,
      width: '80%',
      padding: 10,
      fontSize: 18,
      marginTop: 25,
      color: '#fff'
  },
  button:{
    width: 300,
    height: 50,
    backgroundColor: '#9b6dff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 5
  },
  calcText:{
    fontSize: 15,
    fontWeight: 'bold'
  },
  viewButtons:{
    alignItems: 'center',
    marginTop: 15,
  }
});
