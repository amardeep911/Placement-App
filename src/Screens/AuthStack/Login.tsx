import {
  View,
  Text,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  TextInput,
  Image,
  
} from 'react-native';


import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { AuthRootStackParamList } from '../../navigation/AuthStack';

import { useAppSelector } from '../../utils/hooks';

const Login = () => {



  const navigation = useNavigation<NativeStackNavigationProp<AuthRootStackParamList>>();
  return (
    <SafeAreaView className="flex-1">
      <Text className="text-4xl text-center font-bold mt-8 text-blue-900 ">
        Welcome Back!
      </Text>
      <View
        className="flex-1  bg-white my-5  p-6 space-y-2"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <Text className="justify-center text-xl text-gray-700 font-bold my-2">
          {' '}
          Email
        </Text>
        <TextInput
          className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
          placeholder="Email"
        />
        <Text className="justify-center text-xl text-gray-700 font-bold">
          {' '}
          Password
        </Text>
        <TextInput
          className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
          placeholder="Password"
        />

        <TouchableOpacity className="py-4  bg-yellow-400 rounded-xl">
          <Text className="text-xl font-bold text-center text-gray-700">
            LogIn
          </Text>
        </TouchableOpacity>
        <View  >
          <Text className="text-center justify-center align-middle text-gray-700">
            Don't have an account?{' '}
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
            <Text className="text-yellow-400">Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View className="flex align-middle justify-center ">
          <Text className="text-xl text-gray-700 text-center font-bold">
            Or
          </Text>
        </View>
        <View className="flex-row justify-center py-5">
          <TouchableOpacity
            className="py-3 bg-gray-200 items-center justify-center rounded-xl "
            style={{width: 50, height: 50}}>
            <Image
              style={{
                width: 40,
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              source={require('../../assets/images/google.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
