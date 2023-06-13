import {NavigationContainer} from '@react-navigation/native';
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import LoadingStack from './navigation/LoadingStack';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';


const Navigation = () => {
    const [isLoading, setisLoading] = useState(false);
    const [isAuth, setisAuth] = useState(false);
  return (
    <NavigationContainer>
      {isLoading ? (<LoadingStack/> ): isAuth ? (<AppStack/>): (<AuthStack/>) }
    </NavigationContainer>
  )
}

export default Navigation