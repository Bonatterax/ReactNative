import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SectionList } from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';
import AppLoading from 'expo-app-loading'
import * as Linking from 'expo-linking';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import { 
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic 
  } from '@expo-google-fonts/roboto';
import {useFonts} from 'expo-font';
import RenderHtml from 'react-native-render-html';
import Footer from '../../../Footer';
import ImagePost from './imagePost';
import PostByCategory from './postbyCategory';
import {Picker} from '@react-native-picker/picker';



export default function Home(){
    
    const [data, setData] = useState();
    const [dataHasLoaded, setDataHasLoaded] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState();
    
  

    
    
    const navigation = useNavigation();
    
    let[fontsLoaded] = useFonts({
        Roboto_700Bold,
    })




     useEffect(async ()=>{
        const response = await axios.get('https://blog.coursify.me/wp-json/wp/v2/categories/')
        .then(response => {
            setData(response.data)
        })
        setDataHasLoaded(true);
        
        
    },[]);

   
    
    function orderData(){
        let newList = [...data]

        if(selectedOrder === 1){
            newList.sort((a,b) => (a.name > b.name ? -1 : b.name > a.name ?  1 : 0));
        }else{
            newList.sort((a,b) => (a.name > b.name ? 1 : b.name > a.name ?  -1 : 0));
        }
    }
        
    
      

   

    if(!fontsLoaded || dataHasLoaded === false){
        return <AppLoading/>;
    }

    
   

   
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
                <Text style={styles.ordenarText}>ORDENAR POR:</Text>
                <View style={{width: 120, height: 46, marginTop: 21, marginLeft: 143}}>
                    <Picker
                        selectedValue={selectedOrder}
                        onValueChange={(itemValue, itemIndex) =>{
                            setSelectedOrder(itemValue);
                            console.log(selectedOrder)
                            orderData();
                        }
                    }>
                        <Picker.Item label="A-Z" value={0} />
                        <Picker.Item label="Z-A" value={1} />
                    </Picker>
                </View>
                
            </View>
            <View style={{zIndex: -1}}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}   
                ListFooterComponent={() =>  <Footer/>}
                renderItem={({item, index}) => <View style={styles.Categoria}>
                    <View>
                        <View style={styles.headerCategoria}>
                            <Text style={styles.CategoriaText}>{item.name}</Text>
                            <TouchableOpacity style={styles.verMais}>
                                <Text style={styles.textVerMais}>VER MAIS</Text>
                                <Icon name='play'/>
                            </TouchableOpacity>
                        </View>
                        <PostByCategory data={item.id}/>
                    </View>
                    

                    </View>}
            />
            </View>
           

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Categoria:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    },
    CategoriaText: {
        textAlign: 'left',
        color: '#2AB598',
        fontFamily: 'Roboto_700Bold',
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft:15,
        marginTop: 47,
        textTransform: 'uppercase'
    },
    Rodape: {
        alignItems: 'center',
        backgroundColor: '#2AB598',
        width: 428,
        height: 222,
    },
    imgRodape:{
        width: 172,
        height: 45,
        marginTop: 19

    },
    descView:{
        marginTop: 11,
        width: 290,
        height: 48
    },
    descricao:{
        textAlign: 'center',
        color: "#FFFFFF",
        fontSize: 12
    },
    btnLink:{
        height: 44,
        width: 216,
        marginTop: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        backgroundColor: '#FFA900'
    },
    btnLinkText:{
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 12
    },
    verMais:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 47
    },
    textVerMais:{
        marginRight: 20,
        fontSize: 17
    },
    leiaMais:{
        color: '#FDA506',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 16
    },
    courseTitle:{
        color:'#2AB598',
        fontFamily: 'Roboto_700Bold',
        fontSize: 17,
        fontWeight: 'bold',
        width: 187,
        height: 44,
        marginLeft: 16,
        marginTop: 15
    },
    courseDescription:{
        color: '#868686',
        width: 223,
        height: 78,
        fontSize: 15,
        marginLeft: 16,
        marginTop: 16
    },
    coursePost:{
        marginLeft: 17,
        backgroundColor: '#FFFFFF',
        elevation: 2,
        borderRadius: 12,
        opacity: 1,
        width: 235,
        height: 325,
        marginTop: 28,
        flex: 1
    },
    postImage:{
        width: 235,
        height: 103
    },
    headerCategoria:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    },
    ordenarText:{
        fontSize: 17,
        marginLeft: 15,
        marginTop: 35
    }
}); 