import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


class Lista extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        }

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.carregaIcone = this.carregaIcone.bind(this);
    }

    carregaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    mostraLikes(likers){
        let feed = this.state.feed;

        if(feed.likers <= 0){
            return;
        }else{
            return(
                <Text style={styles.curtidas}>
                    {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
                </Text>
            );
        }
    }

    like(){
        let feed = this.state.feed;

        if(feed.likeada === true){
            this.setState({
                feed:{
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            })
        }else{
            this.setState({
                feed:{
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            })
        }
    }

    render(){
        return(
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image source={{uri:this.state.feed.imgperfil}} style={styles.fotoPerfil}></Image>
                    <Text style={styles.nomeUsuario}> {this.state.feed.nome}</Text>
                </View>


                <Image style={styles.fotoPublicacao} source={{uri:this.state.feed.imgPublicacao}} resizeMode='cover'></Image>
                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image source={this.carregaIcone(this.state.feed.likeada)} style={styles.iconelike}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../img/send.png')} style={styles.iconeSend}></Image>
                    </TouchableOpacity>
                </View>
                
                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}> {this.state.feed.nome}</Text>
                    <Text style={styles.descricao}>{this.state.feed.descricao}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    areaFeed:{

    },
    nomeUsuario:{
        fontSize: 22,
        textAlign: 'left',
        color: '#000000'
    },
    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    fotoPublicacao:{
        flex:1,
        height: 400
    },
    viewPerfil:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding:8
    },
    iconelike:{
        width: 33,
        height: 33 
    },
    areaBtn:{
        flexDirection: 'row',
        padding: 5
    },
    iconeSend:{
        paddingLeft: 5,
        width: 33,
        height: 33 
    },
    viewRodape:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    descricao:{
        paddingLeft: 5,
        fontSize:15,
        color: '#000'
    },
    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5
    },
    curtidas:{
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5
    }
});

export default Lista;