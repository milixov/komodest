import React from 'react';
import { StatusBar } from 'expo-status-bar';

//store
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/store';

//navigation containers
import { enableScreens } from 'react-native-screens';
import Containers from './src/containers';

//i18n
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n/index'

//theme
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

enableScreens();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <I18nextProvider i18n={i18n}>
        <SafeAreaProvider>
          <PaperProvider>
            <Containers />
          </PaperProvider>
        </SafeAreaProvider>
        <StatusBar style="auto" />
      </I18nextProvider>

    </ReduxProvider>
  );
}

export default App;