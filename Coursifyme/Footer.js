import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import * as Linking from 'expo-linking';

export default function Footer(){
    
    
    function callWebsite(){
        Linking.openURL('httpS://coursify.me')
    }

    return(
        <View style={styles.Rodape}>
                            <Image
                                style={styles.imgRodape}
                                source={require('./assets/logo-coursify-w.png')}
                            />
    
                            <View style={styles.descView}>
                                <Text style={styles.descricao}>O Coursify.me é uma plataforma de ensino a distância, onde qualquer pessoa ou empresa pode construir seu EAD e vender cursos pela internet.</Text>
                            </View> 
    
                            <TouchableOpacity style={styles.btnLink} onPress={callWebsite}>
                                <Text style={styles.btnLinkText}>Quero conhecer a plataforma!</Text>
                            </TouchableOpacity>
                
        </View>
    )
}

const styles = StyleSheet.create({
    Rodape: {
        alignItems: 'center',
        backgroundColor: '#2AB598',
        width: 428,
        height: 300,
        
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
})