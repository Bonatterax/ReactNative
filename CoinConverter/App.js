import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Conversor from './src/Conversor'



class App extends Component {

  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Conversor moedaA= "USD" moedaB= "BRL"></Conversor>
        <Conversor moedaA= "BRL" moedaB= "USD"></Conversor>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;

