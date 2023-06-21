import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';
import Assets from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthRootStackParamList } from '../../navigation/AuthStack';

const Verify = () => {
    const navigation =
    useNavigation<NativeStackNavigationProp<AuthRootStackParamList>>();

  return (
    <SafeAreaView className='flex-1 p-10'>
        <View style={{width: '100%', height: '50%', display:'flex', alignSelf:'center'}} >
        <LottieView source={Assets.lottieFiles.email} autoPlay loop />
        </View>
        <View className='flex-1/2 ' style={{width: '100%', height: '50%',display:'flex', alignSelf: 'center',  }} >
        <Text className='text-4xl text-center text-black mb-5' >Verify your email</Text>
        <Text className='text-center text-xl text-black' >We have sent you an email with a link to verify your account</Text>
        
        <TouchableOpacity onPress={(e:GestureResponderEvent)=> navigation.navigate('Login') }>

        <Text className='text-center text-xl text-blue-500 mt-8' >
            Login
        </Text>
        </TouchableOpacity>
        </View>
       
    </SafeAreaView>
  )
}

export default Verify