import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/adaptive-icon.png')} style={styles.image}/>
            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btn}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.btn}>Register User</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.btn}>Register Contractor</Text>
            </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#435C76'
    },
    btn: {
      color: 'gray',
      backgroundColor: 'ghostwhite',
      width: 200,
      fontSize: 16,
      marginBottom : 10,
      padding: 10,
      textAlign: 'center',
      borderColor: '#2076D1',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 10
    },
    opacity: {
        color: 'red'
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 0,
        marginBottom: 50
    }
  });

export default HomeScreen
