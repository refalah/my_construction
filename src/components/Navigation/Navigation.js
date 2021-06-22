import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import DetailsScreen from '../../screens/Details/DetailsScreen';
import LoginScreen from '../../screens/Login/LoginScreen';
import RegisterScreen from '../../screens/Register/RegisterScreen';

function Navigation() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='float'>
                <Stack.Screen name="Index" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
