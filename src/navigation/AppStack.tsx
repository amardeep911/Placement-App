import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/AppStack/Home';
export type AppRootStackParamList = {
    Home: undefined;
};
const Stack = createNativeStackNavigator<AppRootStackParamList>();

const AppStack:React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default AppStack