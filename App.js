import React from 'react';

//store
import {Provider} from 'react-redux';
import store from './src/store';

//navigation containers
import Containers from './src/containers';

//i18n
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n/index'

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Containers/>
      </I18nextProvider>
    </Provider>
  );
}

export default App;