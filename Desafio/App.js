import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch, 
} from 'react-native';

import Slider from '@react-native-community/slider';


class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      switch: false,
      textNome: '',
      textIdade: '',
      valor: 0
    }

    this.salvar = this.salvar.bind(this);
  }

  salvar(){
    alert(this.state.switch + ' ' + this.state.textNome + ' ' + this.state.textIdade + ' ' + this.state.valor.toFixed(0));
  }

  render(){
    return(
      <View style={styles.view}>
        <TextInput placeholder='Nome' style={styles.input} onChangeText={  (texto)  => this.setState({textNome: texto})}></TextInput>
        <TextInput placeholder='Idade' style={styles.input} onChangeText={  (texto)  => this.setState({textIdade: texto})}></TextInput>
        <Text>Estudante?</Text>
        <Switch value={this.state.switch} onValueChange={(valorSwitch => this.setState({switch: valorSwitch}))}></Switch>
        <Text>Limite Atual</Text>
        <Slider style={{width:200, height:40}} minimumValue={0} maximumValue={1000} minimumTrackTintColor="#045E01" maximumTrackTintColor='#48D306' onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}></Slider>
        <Picker>
        <Picker.Item key={1} value={1} label={'M'} />
        </Picker>
        <TouchableOpacity style={styles.botao}><Text style={styles.textoBotao} onPress ={this.salvar}>Abrir Conta</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  input:{
    fontSize: 20,
    fontWeight: 'bold',
 
  },
  botao:{
    backgroundColor: 'white',
  },
  textoBotao:{
     fontWeight: 'bold',
      fontSize: 20
  }
});

export default App;
