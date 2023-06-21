import {NavigationContainer} from '@react-navigation/native';
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import LoadingStack from './navigation/LoadingStack';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';
import { useAppDispatch } from './utils/hooks';
import { useAppSelector } from './utils/hooks';
import Verify from './Screens/AuthStack/Verify';
const Navigation = () => {

  const dispatch = useAppDispatch();
  const navLoading = useAppSelector(state => state.authUser.navLoading);


    const isAuth = useAppSelector(state => state.authUser.isAuth);
    
  
  return (
    <NavigationContainer>
<LoadingStack/>
      {/* {navLoading ? (<LoadingStack /> ): isAuth ? (<AppStack/>): (<AuthStack/>) } */}
    </NavigationContainer>
  )
}

export default Navigation