import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const home = ({navigation}) => {
        return(

            <View style={styles.container}>
                <MaterialIcons style={styles.exit} name="exit-to-app" size={40} color="black" onPress={() => navigation.navigate('Login') } />

                <Text style={styles.titulo}>Você fez login</Text>
                <Text style={styles.titulo}> e está na Página Principal</Text>
  
            </View>
            
        );
}

home.navigationOptions = {
    title: 'Principal',
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#7CB124'

    },
    exit:{
        position: 'absolute',
        right: 20,
        top: 70,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20 , 
    }
});

export default home;