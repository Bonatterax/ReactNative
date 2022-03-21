import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';
import {useEffect, useState} from 'react';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
import RenderHtml from 'react-native-render-html';
import Footer from '../../../Footer'



export default function Post(){
   

    const [postDetailData, setPostDetailData] = useState();
    const [hasLoaded, setHasLoaded] = useState(false);
    const route = useRoute();    
    const {width} = useWindowDimensions();


    useEffect(async ()=>{
        const response = await axios.get(`https://blog.coursify.me/wp-json/wp/v2/posts/${route.params?.id}`)
        .then(response => {
            setPostDetailData(response.data);
        });
        setHasLoaded(true);
    },[]);

    if(hasLoaded === false){
        return <AppLoading/>;
    }else{
        return(
            
            <View style={styles.container}>
                <View style={styles.postContent}>
                    <ScrollView>
                        <Text style={styles.postTitle}>{postDetailData.title['rendered']}</Text>
                        <RenderHtml
                            contentWidth= {width}
                            source={{html: postDetailData.content['rendered']}}
                        />
                        <Footer/>
                    </ScrollView>
                    
                </View>
                
            </View>
    
          
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF"
    },
    postTitle:{
        color: '#2AB598', 
        fontSize: 24,
        fontWeight: 'bold',
        width: 352,
        height: 97
    },
});

