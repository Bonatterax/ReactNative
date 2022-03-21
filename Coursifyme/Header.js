import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



export default function Header() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between', elevation: 1}}>
        <View>
          <Image
            style={{ width: 169, height: 50 }}
            source={require('./assets/logo-2.png')}
          />
        </View>
      </View>
    );
  }