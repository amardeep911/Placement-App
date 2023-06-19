import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '../utils/hooks';
import { useAppDispatch } from '../utils/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { setTokens } from '../Redux/slices/AuthUserSlice';

const LoadingStack = () => {


  const dispatch = useAppDispatch();



  useEffect(() => {
    const checkLocalStorage = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const accessTokenWithoutSlash = JSON.parse(accessToken || '{}');
        if (accessToken) {
          dispatch(setTokens({ accessToken: accessTokenWithoutSlash, isAuth: true }))
        }
      } catch (error) {
        console.log('Error accessing local storage:', error);
      }
    };

    const delay = 2000; // Delay in milliseconds (adjust as needed)

    const timer = setTimeout(() => {
      checkLocalStorage();
    }, delay);

    return () => clearTimeout(timer);
  }, []); 


  return (
    <View>
      <Text className='text-slate-950 text-5xl'>LoadingStack</Text>
    </View>
  )
}

export default LoadingStack