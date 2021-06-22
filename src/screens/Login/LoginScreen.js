import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function LoginScreen() {
    return (
        <View style={styles.container}>
          <Text>Login Page</Text>
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

export default LoginScreen
