import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


export default function App(){
  return(
    <View style={styles.container}>
      <Text>Bruno Bonatti</Text>
      <Icon
      name='home'
      size={25}
      color='#11118c'
      />

      <Icon
      name='user'
      size={25}
      color='#a300a3'
      />

      <Feather
      name='alert-circle'
      size={25}
      color='#7655ff'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});