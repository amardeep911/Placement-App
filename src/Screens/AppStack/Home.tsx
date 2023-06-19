import {View, Text, TouchableOpacity, Button} from 'react-native';
import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {setTokens} from '../../Redux/slices/AuthUserSlice';
import {useAppDispatch} from '../../utils/hooks';
const Home = () => {
  const dispatch = useAppDispatch();

  const logout = async () => {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    dispatch(setTokens({isAuth: false, accessToken: '', refreshToken: ''}));
  };
  return (
    <View className="flex-1 justify-center text-center items-center">
      <Text className="text-black text-center text-4xl">Home</Text>
      <TouchableOpacity
        onPress={logout}
        className="bg-red-600"
        style={{
          width: 200,
          borderRadius: 15,
          justifyContent: 'center',
          height: 50,
        }}>
        <Text className="text-white text-center text-4xl">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
