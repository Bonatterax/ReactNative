
import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import SoundPlayer from 'react-native-sound-player'
const { width, height } = Dimensions.get('screen');


const data = [
    {image: 'https://lorena.r7.com/public/assets/img/galeria-imagens/capas-abel-2.jpg', artist: 'The Weekend', music: 'The Hills', mp3: 'music1'},
    {image: 'https://rollingstone.uol.com.br/media/_versions/pearl_jam_ten_1_widelg.jpg', artist: 'Pearl Jam', music: 'Black', mp3: 'music2'},
    {image: 'https://images-na.ssl-images-amazon.com/images/I/51HwBgmgwWL.jpg', artist: 'John Mayer', music: 'Slow Dancing in a Burning Room', mp3: 'music3'},
    {image: 'https://m.media-amazon.com/images/I/61v6lSOpccL._AC_SX425_.jpg', artist: 'Harry styles', music: 'She', mp3: 'music4'},
    {image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Chris_Cornell_%E2%80%93_Chris_Cornell_album.png', artist: 'Chris Cornell', music: 'The Day I Tried To Live', mp3: 'music5'},
    {image: 'https://i.scdn.co/image/ab67616d0000b2731140c2eb587bb4c8dfbfb7bc', artist: 'Medulla', music: 'Eterno Retorno', mp3: 'music6'},
    {image: 'https://m.media-amazon.com/images/I/71Gq22xYufL._AC_SY450_.jpg', artist: 'Paramore', music: 'Monster', mp3: 'music7'}

];

const imageW = width * 0.7;
const imageH = imageW * 1.54;





export default () => {
  const scrollX = React.useRef(new Animated.Value(0)).current
  const [isPlaying, setIsPlaying] = React.useState(true)
  const songs = React.useRef(null)

  function playAndPauseSongs(item){
    !isPlaying ? setIsPlaying(true) : setIsPlaying(false)
    if(isPlaying === true){
      try{
        SoundPlayer.playSoundFile(item.mp3, 'mp3')
      } catch(e) {
          console.log(e)
      }
        
    } else {
      SoundPlayer.pause()
    }
  }

  function nextSong(index, item){
    if(index!=6){
      index = index+1
    }
    songs.current.scrollToIndex({index})
    setIsPlaying(true)
    SoundPlayer.pause()
  }

  function previousSong(index, item){
    if(index!=0){
      index = index-1
    }
    songs.current.scrollToIndex({index})
    setIsPlaying(true)
    SoundPlayer.pause()
  }

    return (
        <View style={{ flex: 1, backgroundColor: '#000', alignItems:'center' }}>
            <StatusBar hidden />
            <View
            style={StyleSheet.absoluteFillObject}
            >
                {data.map((image, index) => {
                  const inputRange = [
                    (index - 1) * width,
                    index*width,
                    (index + 1) * width
                  ]
                  const slides = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0]
                  })

                  return <Animated.Image
                      key={`image-${index}`}
                      source={{uri:image.image}}
                      style={[
                        StyleSheet.absoluteFillObject, 
                        {
                          opacity: slides
                        }
                      ]}
                      blurRadius={50}
                  />
                })}
            </View>

            <Animated.FlatList
            data={data}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
             {useNativeDriver: true}
            )}
            horizontal
            ref={songs}
            pagingEnabled
            scrollEnabled={false}
            keyExtractor={(_,index) => index.toString()}
            renderItem={({item, index}) => {
              return <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={{uri: item.image}} style={{width: imageW, height: imageH, resizeMode: 'cover', borderRadius: 16}}/>
                <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 25}}>{item.music}</Text>
                <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 20}}>{item.artist}</Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => previousSong(index, item)}>
                      <Image source={require('./assets/return.png')} style={{width: 50, height: 50, tintColor: '#FFF', marginTop: 30, marginRight: 30}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => playAndPauseSongs(item)}>
                        {!isPlaying ? <Image source={require('./assets/pausa.png')} style={{width: 50, height: 50, tintColor: '#FFF', marginTop: 30}}/> : <Image source={require('./assets/botao-play.png')} style={{width: 50, height: 50, tintColor: '#FFF', marginTop: 30}}/> }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nextSong(index, item)}>
                      <Image source={require('./assets/next.png')} style={{width: 50, height: 50, tintColor: '#FFF', marginTop: 30, marginLeft: 30}}/>
                    </TouchableOpacity>
                </View>
                
              </View>
            }}
            />
        </View>
    );
};