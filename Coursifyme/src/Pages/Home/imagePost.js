import {useEffect, useState} from 'react';
import {Image, View,Text, FlatList} from 'react-native';
import AppLoading from 'expo-app-loading'
import axios from 'axios';


export default function ImagePost(data){
    const [imageData, setImageData] = useState();
    const [imageDataHasLoaded, setImageDataHasLoaded] = useState(false);

    useEffect(async()=>{
        const response = await axios.get(`https://blog.coursify.me/wp-json/wp/v2/media?include=${data.data}`)
        .then(response => {
            setImageData(response.data)
        })
        setImageDataHasLoaded(true);
    },[])

    if(imageDataHasLoaded === false){
        return <AppLoading/>;
    }

    
    return(
        <View>
            <Image
            style={{width: 235, height: 103, borderRadius: 12}}
            source={{uri: imageData[0].source_url}}
            />
        </View>
       
       
    )
    
}