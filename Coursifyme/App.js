import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Pages/Home';
import Post from './src/Pages/Post';
import Header from './Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();


export default function App() {
 

  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
              headerTitle: (props) => <Header {...props}/>,
              headerRight: () => (
                <View style={{ backgroundColor: '#2AB598',height:37, width: 37, borderRadius: 70, alignItems: 'center', justifyContent: 'center'  }}>
                    <Icon
                      name='bars'
                      size={25}
                      color='#FFFFFF'
                    />
                </View> 
              )
            }}/>
            <Stack.Screen name="Post" component={Post} options={{
              headerTitle: (props) => <Header {...props}/>,
              headerRight: () => (
                <View style={{ backgroundColor: '#2AB598',height:37, width: 37, borderRadius: 70, alignItems: 'center', justifyContent: 'center'  }}>
                    <Icon
                      name='bars'
                      size={25}
                      color='#FFFFFF'
                    />
                </View> 
              )
            }}/>

          </Stack.Navigator>
        </NavigationContainer>
  );
}


