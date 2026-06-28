import React from 'react';

import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import Toast from 'react-native-toast-message';

import RootNavigator from './src/navigation/RootNavigator';

import { ThemeProvider } from './src/store/ThemeContext';

import { AuthProvider } from './src/store/AuthContext';

import { store } from './src/redux/store';
import { useEffect } from 'react';

import NotificationService from './src/services/notificationService';
import { configureGoogleSignin } from './src/config/googleSignIn';

const App = () => {
  useEffect(() => {
    configureGoogleSignin();
  }, []);
  useEffect(() => {
    NotificationService.requestPermission();
    //push notification test
  }, []);
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
