import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import Navigation from './src/Navigation';
import {Provider} from 'react-redux';
import { PaperProvider } from 'react-native-paper';

import {Store} from './src/Redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <PaperProvider>
      <Navigation />
      </PaperProvider>
    </Provider>
  );
};

export default App;
