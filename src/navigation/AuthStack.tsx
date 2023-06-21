import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import React from 'react'


import Login from '../Screens/AuthStack/Login';
import Signup from '../Screens/AuthStack/Signup';
import Verify from '../Screens/AuthStack/Verify';
export type AuthRootStackParamList = {
    Login: undefined;
    Signup: undefined;
    Verify: undefined;
}

const Stack = createNativeStackNavigator<AuthRootStackParamList>();
const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verify" component={Verify} />
    </Stack.Navigator>
  )
}

export default AuthStack