import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Lista from './src/Lista'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id:'1', nome: 'Bruno Bonatti', descricao: 'Bora LOUD!', imgperfil: 'https://pbs.twimg.com/profile_images/1488519371102294017/ofB_4znD_400x400.jpg', imgPublicacao: 'https://conteudo.imguol.com.br/c/entretenimento/df/2022/02/03/loud-valorant-1643931078795_v2_450x337.jpg', likeada: false, likers: 0},
        {id:'2', nome: 'Pepito Silva', descricao: 'Bora LOUD!', imgperfil: 'https://cdn.worldvectorlogo.com/logos/pepito.svg', imgPublicacao: 'https://i.pinimg.com/originals/fe/29/5e/fe295e7f6197023e58cdf1bf51753a65.jpg', likeada: false, likers: 0},
        {id:'3', nome: 'SMzinho', descricao: 'É a smoke meio', imgperfil: 'https://s2.glbimg.com/Ruf6FlInPBZfTlkI12ZSx0kTRSM=/top/e.glbimg.com/og/ed/f/original/2021/05/06/image_MCnW6gL.png', imgPublicacao: 'https://s2.glbimg.com/Ruf6FlInPBZfTlkI12ZSx0kTRSM=/top/e.glbimg.com/og/ed/f/original/2021/05/06/image_MCnW6gL.png', likeada: false, likers: 0},
        {id:'4', nome: 'Topster Topster', descricao: 'Topster', imgperfil: 'https://harleyguo.com/wp-content/uploads/2021/12/topster-logo.png', imgPublicacao: 'https://img.focanamoda.com.br/cache/1000x1000/t/o/top-topper-topster-topzera-topissimo-camiseta-infantil-branca.jpg', likeada: false, likers: 3},
        {id:'5', nome: 'Nina Camerano', descricao: 'Amo gatinhos', imgperfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApW1uTPaLI8Q-9370dBM0V7NgfW3coXPLgQ&usqp=CAU', imgPublicacao: 'https://i0.statig.com.br/bancodeimagens/1t/19/gk/1t19gkv4wj56sujljd2n2h97j.jpg', likeada: false, likers: 9},
        {id:'6', nome: 'Liu Wen', descricao: 'xing ling lang', imgperfil: 'https://web.portalsucesso.com.br/wp-content/uploads/2019/08/dj-liu1.png', imgPublicacao: 'https://web.portalsucesso.com.br/wp-content/uploads/2019/08/dj-liu1.png', likeada: false, likers: 11},
        {id:'7', nome: 'Wen Liu', descricao: 'xing lang ling', imgperfil: 'https://beatforbeat.com.br/site/wp-content/uploads/2019/04/Liu-e1554327710168.jpg', imgPublicacao: 'https://beatforbeat.com.br/site/wp-content/uploads/2019/04/Liu-e1554327710168.jpg', likeada: false, likers: 50},
        {id:'8', nome: 'Tio Zé', descricao: 'Eta nois', imgperfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIuCYn7gN7CnJXsnTdSS0NaVEMSXohX3q0g&usqp=CAU', imgPublicacao: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIuCYn7gN7CnJXsnTdSS0NaVEMSXohX3q0g&usqp=CAU', likeada: false, likers: 1},
        {id:'9', nome: 'Bruno Bonatti', descricao: 'Guitarras guitarras guitarras', imgperfil: 'https://pbs.twimg.com/profile_images/1488519371102294017/ofB_4znD_400x400.jpg', imgPublicacao: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXv5xM5VpM1jTTp5QUQY9ZqcM_Vb0UUNL-ig&usqp=CAU', likeada: false, likers: 2},
        {id:'10', nome: 'Xablau Xabliu', descricao: 'Epa lele', imgperfil: 'https://cdn.dicionariopopular.com/imagens/xablau-og.jpg', imgPublicacao: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHkGReYdnQFDcdv608Ze5e0nJVx3QyL0DvFunTlglMkqHSJTOOxVbFGXHClUVWxIBUjk&usqp=CAU', likeada: false, likers: 0},
        {id:'11', nome: 'Dumbo', descricao: 'Amo duins', imgperfil: 'https://www.yourwdwstore.net/assets/images/4/40000/5000/900/45972.jpg', imgPublicacao: 'https://www.yourwdwstore.net/assets/images/4/40000/5000/900/45972.jpg', likeada: false, likers: 0},
        
      ]
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('./src/img/dumbo.jpg')} style={styles.logo}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./src/img/send.png')} style={styles.send}></Image>
          </TouchableOpacity>
        </View>

        <FlatList showsHorizontalScrollIndicator={false} data={this.state.feed} renderItem={ ({item}) => <Lista data={item}></Lista>}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation:1
  },
  send:{
    width: 23,
    height: 23,
  },
  logo:{
    width: 200,
    height: 23 
  }
})



export default App;
