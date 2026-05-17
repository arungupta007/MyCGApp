/* eslint-disable react/no-unstable-nested-components */
import React, { useContext, useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Modal } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useTheme } from '../hooks/useTheme';
import { AuthContext } from '../store/AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BottomTabNavigator from './BottomTabNavigator';
import { DrawerParamList } from './types';
<<<<<<< HEAD
import { createStyles } from './DrawerNavigatorCSS';
=======
import { createStyles } from './DrawerNavigator';
>>>>>>> 1d4a312 (initial commit)

const Drawer = createDrawerNavigator<DrawerParamList>();

const CustomDrawerContent = (props: any) => {
  const { isDark, toggleTheme, theme } = useTheme();
  const { logout } = useContext(AuthContext);
  const styles = createStyles(theme);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutPress = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    logout();
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <View style={styles.drawerContentContainer}>
      <DrawerContentScrollView {...props} scrollEnabled={true}>
        <DrawerItemList {...props} />

        <View style={styles.themeContainer}>
          <View style={styles.themeCard}>
            <View style={styles.themeContent}>
              <View style={styles.themeTextWrapper}>
                <Text style={styles.themeTitle}>Dark Mode</Text>
              </View>
              <Switch value={isDark} onValueChange={toggleTheme} />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogoutPress}
        >
          <Ionicons name="log-out" size={20} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showLogoutModal}
        transparent
        animationType="fade"
        onRequestClose={handleCancelLogout}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Logout</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to logout?
            </Text>

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleCancelLogout}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleConfirmLogout}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const DrawerNavigator = () => {
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.background,
        },
        drawerLabelStyle: {
          color: theme.text,
        },
        drawerActiveTintColor: theme.primary || '#007AFF',
        drawerInactiveTintColor: theme.text,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
