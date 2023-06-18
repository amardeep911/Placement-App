import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthRootStackParamList} from '../../navigation/AuthStack';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {registerUser} from '../../Redux/actions/action';
import { registerDatatypes } from '../../utils/types';
import {addUser} from '../../Redux/slices/AuthUserSlice';

import {useDispatch, useSelector} from 'react-redux';
const Signup = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [password2, setpassword2] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const data = {
    email: email,
    name: name,
    password: password,
    password2: password2,
  };
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthRootStackParamList>>();
  const {loading, error, success} = useAppSelector(state => state.authUser);

  useEffect(() => {
    if (success) {
      navigation.navigate('Login');
      dispatch(addUser({success: false}));
      Alert.alert('User Registered Successfully')

    }
  }, [success]);

  const handleRegister = (data: registerDatatypes) => {
    if(password !== password2){
      console.log('here')
      Alert.alert('Password does not match')
      return;
    }
    dispatch(registerUser(data)); 
   
  }


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
      {error && (
        <Text className="text-red-500 text-center mt-2 font-bold text-xl">
          {error}
        </Text>
      ) }

      <ScrollView
        className="flex-1  bg-white my-5  p-6 space-y-2"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <Text className="justify-center text-xl text-gray-700 font-bold my-2">
          {' '}
          Name
        </Text>
        <TextInput
          className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
          placeholder="Name"
          onChangeText={text => setname(text)}
        />
        <Text className="justify-center text-xl text-gray-700 font-bold my-2">
          {' '}
          Email
        </Text>
        <TextInput
          className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
          placeholder="Username"
          onChangeText={text => setemail(text)}
        />
        <Text className="justify-center text-xl text-gray-700 font-bold">
          {' '}
          Password
        </Text>
        <TextInput
          className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
          placeholder="Password"
          onChangeText={text => setpassword(text)}
        />
        <Text className="justify-center text-xl text-gray-700 font-bold">
          {' '}
          Confirm Password
        </Text>
        <TextInput
          className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-3"
          placeholder="Confirm password"
          onChangeText={text => setpassword2(text)}
        />

        <TouchableOpacity
          className="py-4  bg-yellow-400 rounded-xl"
          onPress={(e: GestureResponderEvent)=> handleRegister(data)}>
          <Text className="text-xl font-bold text-center text-gray-700">
            SignUp
          </Text>
        </TouchableOpacity>
        {loading && <Text className="text-center text-xl font-bold text-gray-700">Loading...</Text> }
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
        <View className="flex-row justify-center py-2">
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
