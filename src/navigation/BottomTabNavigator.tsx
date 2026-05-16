import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/HomeScreen';

import AppointmentsScreen from '../screens/home/AppointmentsScreen';

import ProfileScreen from '../screens/home/ProfileScreen';

import { BottomTabParamList } from './types';

import { useTheme } from '../hooks/useTheme';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const { theme, isDark } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: '#4A90E2',

        tabBarInactiveTintColor: isDark ? '#888' : '#999',

        tabBarStyle: {
          backgroundColor: theme.card,

          borderTopWidth: 0,

          elevation: 8,

          height: 65,

          paddingBottom: 8,

          paddingTop: 8,
        },

        tabBarLabelStyle: {
          fontSize: 12,

          fontWeight: '600',
        },

        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => {
          let iconName: string | undefined;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Appointments') {
            iconName = 'calendar-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Appointments" component={AppointmentsScreen} />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
