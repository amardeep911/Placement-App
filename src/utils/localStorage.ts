
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTokensToStorage = async (accessToken: string, refreshToken:string) => {
    try {
      await AsyncStorage.setItem('accessToken', JSON.stringify(accessToken));
        await AsyncStorage.setItem('refreshToken', JSON.stringify(refreshToken));

    } catch (error) {
      console.log('Error storing tokens in AsyncStorage:', error);
    }
  };