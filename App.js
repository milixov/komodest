import React from 'react';

import { Text, View } from 'react-native';

//store
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Expo Success Project</Text>
      </View>
    </Provider>
  );
}

export default App;