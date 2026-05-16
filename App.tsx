import React from 'react';

import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import Toast from 'react-native-toast-message';

import RootNavigator from './src/navigation/RootNavigator';

import { ThemeProvider } from './src/store/ThemeContext';

import { AuthProvider } from './src/store/AuthContext';

import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <NavigationContainer>
            <RootNavigator />

            <Toast />
          </NavigationContainer>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
