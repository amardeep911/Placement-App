import {
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {Text} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthRootStackParamList} from '../../navigation/AuthStack';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {registerUser} from '../../Redux/actions/action';
import {registerDatatypes} from '../../utils/types';
import {addUser} from '../../Redux/slices/AuthUserSlice';
import {TextInput} from 'react-native-paper';

const Signup = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [password2, setpassword2] = useState('');
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
      Alert.alert('User Registered Successfully');
    }
  }, [success]);

  const handleRegister = (data: registerDatatypes) => {
    if (password !== password2) {
      console.log('here');
      Alert.alert('Password does not match');
      return;
    }
    dispatch(registerUser(data));
  };

  return (
    <SafeAreaView className="flex-1 bg-violet-100">
      <View className="flex-row justify-start  ">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className=" p-2 mt-3 ml-4 ">
          <ArrowLeftIcon size="25" color={'black'} />
        </TouchableOpacity>
      </View>
      <Text
        className="text-center text-violet-800 font-serif font-extrabold "
        variant="displaySmall">
        Sign Up
      </Text>
      {error && (
        <Text className="text-red-500 text-center mt-2 font-bold text-xl">
          {error}
        </Text>
      )}

      <ScrollView
        className="flex-1  bg-white my-5  p-6 space-y-2"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <Text className="justify-center  text-black  my-2" variant="bodyLarge">
          {' '}
          Name
        </Text>
        <TextInput
          placeholder="Name"
          className="rounded-xl"
          mode="flat"
          underlineColor="transparent"
          returnKeyType="next"
          onChangeText={text => setname(text)}
        />
        <Text className="justify-center text-black my-2" variant="bodyLarge">
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
        <Text className="justify-center  text-black" variant="bodyLarge">
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
        <Text className="justify-center  text-black " variant="bodyLarge">
          {' '}
          Confirm Password
        </Text>
        <TextInput
          placeholder="Confirm Password"
          className="rounded-xl"
          mode="flat"
          error={password !== password2 ? true : false}
          secureTextEntry={true}
          underlineColor="transparent"
          onChangeText={text => setpassword2(text)}
        />
        <View className="my-6">
          <Button
            mode="contained"
            className="mt-3"
            loading={loading}
            onPress={(e: GestureResponderEvent) => handleRegister(data)}>
            <Text className="text-xl  font-bold text-center text-white">
              SignUp
            </Text>
          </Button>
        </View>
        <View className="flex flex-row justify-center align-middle  ">
          <Text
            className="text-center   align-middle text-black"
            variant="bodyLarge">
            Have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="text-violet-600" variant="bodyLarge">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex align-middle justify-center ">
          <Text className="text-xl text-gray-700 text-center font-bold">
            Or
          </Text>
        </View>
        <View className=" flex-row justify-center py-2">
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
