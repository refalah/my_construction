import React, { Component } from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import firebase from 'firebase'

export class RegisterScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      username = '',
      email = '',
      password = ''
    }

    this.register = this.register.bind(this);
  }

  register() {
      const { username, email, password } = this.state;
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="username"
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          placeholder="password"
          onChangeText={(password) => this.setState({password})}
          secureTextEntry
        />
        <Button
          onPress={() => this.register()}
          title="Register"
        />
      </View>
    )
  }
}

export default RegisterScreen
