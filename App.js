import { StatusBar } from 'expo-status-bar';
import React from 'react';

import firebase from 'firebase';



import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/components/Navigation/Navigation';


export default function App() {

  
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyACR3outNtVe0b9pFjsBUav-QsA8MXQtN0",
    authDomain: "myconstruction-5d8ca.firebaseapp.com",
    projectId: "myconstruction-5d8ca",
    storageBucket: "myconstruction-5d8ca.appspot.com",
    messagingSenderId: "541065090179",
    appId: "1:541065090179:web:debce1a2300ff40e64f7b6",
    measurementId: "G-XYHGXP7CZW"
  };
  
  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
  
  //firebase.analytics();

  return (
    <>
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
