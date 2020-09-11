import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const cadastrar = ({navigation}) => {
        return(

            <View style={styles.container}>

                <AntDesign style={styles.back} name="back" size={30} color="black" onPress={() => navigation.navigate('Login') }/>

                <Text style={styles.titulo}>Preencha Seus Dados</Text>

                <Text style={styles.descricao}>Nome</Text>
                <TextInput  style={styles.input} />

                <Text style={styles.descricao}>Email</Text>
                <TextInput  style={styles.input} />

                <Text style={styles.descricao}>Diretoria</Text>
                <TextInput  style={styles.input} />

                <Text style={styles.descricao}>Senha</Text>
                <TextInput secureTextEntry= {true} style={styles.input} />

                <Text style={styles.descricao}>Confirmar Senha</Text>
                <TextInput secureTextEntry= {true} style={styles.input} />

                <Button title="Enviar" onPress={() => navigation.navigate('Principal') }></Button>

            </View>
            
        );
}

cadastrar.navigationOptions = {
    title: 'Cadastro',
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#7CB124'

    },
    back:{
        position: 'absolute',
        left: 20,
        top: 40,
        marginBottom: 20,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 30 ,
        marginBottom: 50
    },
    descricao:{
        fontWeight: 'bold',
    },
    input:{
        backgroundColor: '#fff',
        borderRadius: 2,
        width: 200,

        marginBottom: 30,
    },
});

export default cadastrar;