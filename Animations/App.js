import React, {Component} from 'react';
import {Text, View, Platform, StyleSheet, Animated, TouchableOpacity} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      larAnimada: new Animated.Value(150),
      altAnimada: new Animated.Value(50),
      opacidadeAnimada: new Animated.Value(1)
    };


    Animated.loop(
      Animated.sequence([
        Animated.timing(
          this.state.larAnimada,{
            toValue: 400,
            duration: 2000
          }
        ),

        Animated.timing(
          this.state.altAnimada,{
            toValue: 200,
            duration: 2000
          }
        ),

        Animated.timing(
          this.state.opacidadeAnimada,{
            toValue: 0,
            duration: 2000
          }
        )
      ])
    ).start()

    /*Animated.parallel([
      Animated.timing(
        this.state.larAnimada, {
          toValue: 400,
          duration: 5000
        }
      ),

      Animated.timing(
        this.state.altAnimada,{
          toValue: 200,
          duration: 5000
        }
      )
    ]).start();
    */

   /* Animated.sequence([
      Animated.timing(
        this.state.larAnimada, {
          toValue: 400,
          duration: 2000
        }
      ),

      Animated.timing(
        this.state.altAnimada,{
          toValue: 200,
          duration: 2000
        }
      ),

      Animated.timing(
        this.state.opacidadeAnimada,{
          toValue: 0,
          duration: 1000
        }
      )
    ]).start();
    */

    /*Animated.timing(
      this.state.larAnimada, {
        toValue: 500,
        duration: 5000
      }
    ).start();
    */
  }


  render(){
    return(
      <View style={styles.container}>
    
         <Animated.View style={{width: this.state.larAnimada, height: this.state.altAnimada, backgroundColor: '#4169E1', justifyContent: 'center', opacity: this.state.opacidadeAnimada, borderRadius: 25}}>
            <Text style={{color: '#FFF', fontSize: 22, textAlign: 'center'}}>Carregando...</Text>
          </Animated.View>

      </View>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})