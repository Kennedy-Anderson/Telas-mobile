import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';


const login = ({navigation}) => {
        return(

            <View style={styles.container}>

                    <Image source={require('../../assets/logo.png')} style={styles.imagem}/>
                
                    <Text style={styles.titulo}>Usuário</Text>
                    <TextInput  style={styles.input} />

                    <Text style={styles.titulo}>Senha</Text>
                    <TextInput secureTextEntry= {true} style={styles.input} />

                    <Button title="Login" onPress={() => navigation.navigate('Principal') } />

                    <Text  style={styles.texto}>Ainda não possui conta ?</Text>
                    <Text style={styles.cadastrar} onPress={() => navigation.navigate('Cadastro') } >Cadastre-se</Text>

            </View>
            
        );
}

login.navigationOptions = {
    title: 'Login',
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#7CB124'

    },
    imagem:{
        width: 200,
        height: 200,
        marginBottom: 50,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20 , 
    },
    input:{
        backgroundColor: '#fff',
        borderRadius: 2,
        width: 200,

        marginBottom: 30,
    },
    texto:{
        fontWeight: 'bold',
        marginTop: 40,
    },
    cadastrar:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007FFF',
    }
});

export default login;