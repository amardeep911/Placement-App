import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthRootStackParamList} from '../../navigation/AuthStack';
const Signup = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthRootStackParamList>>();

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
        SignUp
      </Text>
      <ScrollView
        className="flex-1  bg-white my-5  p-6 space-y-2"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <Text className="justify-center text-xl text-gray-700 font-bold my-2">
          {' '}
          Email
        </Text>
        <TextInput
          className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
          placeholder="Username"
        />
        <Text className="justify-center text-xl text-gray-700 font-bold">
          {' '}
          Password
        </Text>
        <TextInput
          className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
          placeholder="Password"
        />
        <Text className="justify-center text-xl text-gray-700 font-bold">
          {' '}
          Confirm Password
        </Text>
        <TextInput
          className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
          placeholder="Confirm password"
        />

        <TouchableOpacity className="py-4  bg-yellow-400 rounded-xl">
          <Text className="text-xl font-bold text-center text-gray-700">
            SignUp
          </Text>
        </TouchableOpacity>
        <View>
          <Text className="text-center justify-center align-middle text-gray-700">
            Have an account?{' '}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-yellow-400">Login</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
