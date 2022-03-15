import React, {Component} from 'react';
import {
  View, 
  Text,
  StyleSheet,
  Image, 
  TouchableOpacity,
} from 'react-native'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Quem espera sempre alcança',
      'Agua mole em pedra dura, tanto bate até que fura',
      'Se os dias bons tem fim, os dias ruins também terão',
      'Fortes são aqueles que resistem'
    ]
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: this.frases[numeroAleatorio]
    })

    this.setState({
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View  style={styles.container}>

        <Image source={this.state.img} style={styles.img}></Image>
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width:250,
    height:250
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;