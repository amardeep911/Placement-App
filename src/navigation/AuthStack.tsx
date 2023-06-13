import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import React from 'react'

import Login from '../Screens/AuthStack/Login';
import Signup from '../Screens/AuthStack/Signup';

export type AuthRootStackParamList = {
    Login: undefined;
    Signup: undefined;
}

const Stack = createNativeStackNavigator<AuthRootStackParamList>();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthStack