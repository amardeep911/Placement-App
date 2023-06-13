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
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row justify-start">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-yellow-500 p-2 rounded-tr-2xl mt-3 rounded-bl-2xl ml-4 ">
          <ArrowLeftIcon size="25" color="black" />
        </TouchableOpacity>
      </View>
      <Text className="text-4xl text-center font-bold text-blue-900 ">
        Login here
      </Text>
      <View
        className="flex-1  bg-white my-5  p-4 space-y-2"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <Text className="justify-center text-xl text-gray-700 font-bold my-2">
          {' '}
          Email
        </Text>
        <TextInput
          className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
          placeholder="username"
        />
        <Text className="justify-center text-xl text-gray-700 font-bold">
          {' '}
          Password
        </Text>
        <TextInput
          className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
          placeholder="Password"
        />

        <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
          <Text className="font-xl font-bold text-center text-gray-700">
            LogIn
          </Text>
        </TouchableOpacity>
        <View>
          <Text className="text-center text-gray-700">
            Don't have an account?{' '}
            <Text className="text-yellow-400">Sign Up</Text>
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
