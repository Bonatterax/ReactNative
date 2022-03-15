import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Button,
  Modal
} from 'react-native'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        modalAberto: false
    }
    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
  }

  abrirModal(){
    this.setState({modalAberto: true})
  }

  fecharModal(){
    this.setState({modalAberto:false})
  }

  render(){
    return(
      <View style={styles.container}>
        <Button title='Entrar' onPress={this.abrirModal}></Button>

        <Modal animationType="slide" visible={this.state.modalAberto}>
          <View style={{backgroundColor: '#292929', flex: 1}}>
            <Text style={{color:'#FFF', fontSize: 28}}>Seja Bem-Vindo</Text>
            <Button title='Fechar' onPress={this.fecharModal}></Button>
          </View>
        </Modal>
      </View>
    );
  }


}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  }
})

export default App;