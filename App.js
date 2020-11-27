import React from 'react';

//navigation containers
import Containers from './src/containers';

//store
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Containers/>
    </Provider>
  );
}

export default App;