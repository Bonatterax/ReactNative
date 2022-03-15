import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component{

  constructor(props){
    super(props);
    this.state = { 
      input:'',
      nome:''
    };
    this.salvaNome = this.salvaNome.bind(this);
  }

  salvaNome(){
    this.setState({
      nome: this.state.input
    });
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.viewInput}>
          <TextInput style={styles.input} value={this.state.input} onChangeText={(text) => this.setState({input:text})} underlineColorAndroid='transparent'></TextInput>
          <TouchableOpacity onPress ={this.salvaNome}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>
       
       <Text style={styles.nome}>{this.state.nome}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
    alignItems: 'center'
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10
  },
  botao:{
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4
  },
  nome:{
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15
  }
})

export default App;