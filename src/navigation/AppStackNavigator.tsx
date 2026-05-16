import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import PropertyDetailsScreen from '../screens/home/PropertyDetailsScreen';
import AppointmentFormScreen from '../screens/home/AppointmentFormScreen';
import { AppStackParamList } from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Main App */}

      <Stack.Screen
        name="MainApp"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />

      {/* Details Screen */}

      <Stack.Screen
        name="PropertyDetails"
        component={PropertyDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* AppointmentForm Screen */}

      <Stack.Screen
        name="AppointmentForm"
        component={AppointmentFormScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
