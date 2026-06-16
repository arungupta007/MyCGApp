import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen/SignupScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPassword/ForgotPasswordScreen';
import { AuthStackParamList } from './types';
const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
