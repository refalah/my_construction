import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import firebase from 'firebase';

function RegisterScreen() {

    const [form, setForm] = useState({
      username: "",
      email: "",
      password: "",
      cPassword: ""
    })
    
    const loginValidationSchema = yup.object().shape({   

      username: yup
        .string()
        .required('Username is Required'),
      email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
      password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
      cPassword: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    })

    

    const handleSubmit = () => {
      const {email, password} = form;
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
    }


    return (
        <View style={styles.container}>
        <Formik
          enableReinitialize
          validationSchema={loginValidationSchema}
          initialValues={form}
          onSubmit={(e) => {
            handleSubmit();
        }}
        >
           {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
              <>
                <TextInput
                  name="username"
                  placeholder="Username"
                  style={styles.input}
                  onChange={(e) => setForm(e.nativeEvent.text)}
                  value={form.username}
                />
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={form.email}
                  
                  keyboardType="email-address"
                />
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={form.password}
                  secureTextEntry
                />
                <TextInput
                  name="cPassword"
                  placeholder="Confirm Password"
                  style={styles.input}
                  onChangeText={handleChange('cPassword')}
                  onBlur={handleBlur('cPassword')}
                  value={form.cPassword}
                  secureTextEntry
                />
                <Button onPress={handleSubmit} title="Submit" />
              </>
            )}
        </Formik>
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
    },
    input: {
        color: 'gray',
        backgroundColor: 'ghostwhite',
        width: 250,
        fontSize: 14,
        marginBottom : 10,
        padding: 5,
        textAlign: 'left',
        borderColor: '#2076D1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    }
  });

export default RegisterScreen
