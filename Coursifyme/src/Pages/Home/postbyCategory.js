import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';
import AppLoading from 'expo-app-loading'
import ImagePost from './imagePost';
import RenderHtml from 'react-native-render-html';
import {useNavigation} from '@react-navigation/native';

export default function PostByCategory(data){
    const [postData, setPostData] = useState();
    const [postDataHasLoaded, setPostDataHasLoaded] = useState(false);
    const navigation = useNavigation();

    useEffect(async()=>{
        const response = await axios.get(`https://blog.coursify.me/wp-json/wp/v2/posts?categories=${data.data}`)
        .then(response => {
            setPostData(response.data)
        })
        setPostDataHasLoaded(true);
    },[])
   
    if(postDataHasLoaded === false){
        return <AppLoading/>;
    }else{
        
     return(
        <FlatList
        data={postData}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item, index}) => 
        <View>
            <TouchableOpacity style={styles.coursePost} onPress={() => navigation.navigate('Post', { id: item.id})}>
                <ImagePost data={item.featured_media}/>
                <Text style={styles.courseTitle}>{item.title['rendered']}</Text>
                <View style={styles.courseDescription}>
                    <RenderHtml 
                        contentWidth={223}
                        source={{html:item.excerpt['rendered']}}
                    />
                </View>
                                   
                <Text style={styles.leiaMais}>Leia mais..</Text>
            </TouchableOpacity>
        </View>}
                    
         />
    )
}
}

const styles = StyleSheet.create({
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
})