import {
  View,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Text} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../utils/hooks';
import {useAppSelector} from '../../utils/hooks';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthRootStackParamList} from '../../navigation/AuthStack';
import {loginDatatypes} from '../../utils/types';
import {Alert} from 'react-native';
import {Button} from 'react-native-paper';
import {GestureResponderEvent} from 'react-native';


import {loginUser} from '../../Redux/actions/action';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const loginData = {
    email: email,
    password: password,
  };
  const error = useAppSelector(state => state.authUser.error);
  const loading = useAppSelector(state => state.authUser.loading);
  const success = useAppSelector(state => state.authUser.success);
  const dispatch = useAppDispatch();

  const handleLogin = (data: loginDatatypes) => {
    dispatch(loginUser(data));
  };
  const handleForgotPassword = () => {
    Alert.alert('Forgot Password'
    ,'Feature under development');
  };
  useEffect(() => {
    if (success) {
      Alert.alert('User Logged in Successfully');
    }
  }, [success]);
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthRootStackParamList>>();




  return (
    <SafeAreaView className="flex-1 bg-violet-50">
      <Text className="text-4xl text-center font-extrabold mt-8 text-blue-900 ">
        Login
      </Text>
      {error && (
        <Text className="text-red-500 text-center mt-2 font-bold text-xl">
          {error}
        </Text>
      )}
      <View
        className="flex-1  bg-white my-5  p-6 space-y-2"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <Text className="justify-center text-xl text-gray-700 font-bold my-2">
          {' '}
          Email
        </Text>
        <TextInput
          placeholder="Email"
          className="rounded-xl"
          underlineColor="transparent"
          mode="flat"
          returnKeyType="next"
          keyboardType="email-address"
          onChangeText={text => setemail(text)}
        />
        <Text className="justify-center text-xl text-gray-700 font-bold">
          {' '}
          Password
        </Text>
        <TextInput
          placeholder="Password"
          className="rounded-xl"
          underlineColor="transparent"
          mode="flat"
          secureTextEntry={true}
          returnKeyType="next"
          onChangeText={text => setpassword(text)}
        />
        <TouchableOpacity  onPress={() => handleForgotPassword()}>
    <Text style={{ color: 'blue', textAlign: 'left', marginTop: 6 }}>
      Forgot Password?
    </Text>
  </TouchableOpacity>

        <View className="my-6">
          <Button
            mode="contained"
            className="mt-3"
            loading={loading}
            onPress={(e: GestureResponderEvent) => handleLogin(loginData)}>
            <Text className="text-xl  font-bold text-center text-white">
              Login
            </Text>
          </Button>
          
        </View>
        
        <View className="flex flex-row justify-center align-middle  ">
          <Text
            className="text-center   align-middle text-black"
            variant="bodyLarge">
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text className="text-violet-600" variant="bodyLarge">
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View className="flex align-middle justify-center ">
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
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;
