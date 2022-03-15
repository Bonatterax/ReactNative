import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
        numero: 0,
        butao: 'Vai'
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpa = this.limpa.bind(this);
  }


  vai(){

    if(this.timer != null){
      
      clearInterval(this.timer);
      this.timer = null;
      this.setState({butao:'Vai'})
    }else{
      this.timer = setInterval(() => {
      this.setState({numero: this.state.numero +0.1})
    }, 100);

    this.setState({butao:'Parar'});
    }

    
  }

  limpa(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({numero: 0, butao: 'Vai'})
  }

  render(){
    return(
      <View style={styles.container}>
        <Image source={require('./src/download2.png')} style={styles.cronometro}></Image>
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.butao}</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.btn} onPress={this.limpa}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 90,
    height: 40
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }
});

export default App;