import { View, Text } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';

const LoadingStack = () => {
  return (
      <Lottie source={require('../assets/loader_animation.json')} autoPlay loop />
  );
}

export default LoadingStack