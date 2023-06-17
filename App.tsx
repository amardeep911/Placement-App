import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import Navigation from './src/Navigation';
import {Provider} from 'react-redux';

import {Store} from './src/Redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};

export default App;
