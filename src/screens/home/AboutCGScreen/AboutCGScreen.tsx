import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ScreenWrapper from '../../../components/common/ScreenWrapper';
import Header from '../../../components/common/AppHeader/AppHeader';
import { useTheme } from '../../../hooks/useTheme';
import { styles } from './styles';

const AboutCGScreen = () => {
  const { theme } = useTheme();

  return (
    <ScreenWrapper>
      <Header title="About CG" showMenu />

      <ScrollView
        style={[styles.container, { backgroundColor: theme.background }]}
      >
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.title, { color: theme.text }]}>
            Welcome to CG Real Estate
          </Text>

          <Text style={[styles.description, { color: theme.text }]}>
            CG Real Estate is a modern property management and real estate
            platform designed to simplify property discovery, appointment
            booking, and customer engagement. The application allows users to
            browse available properties, view detailed information, schedule
            appointments, and manage their profile seamlessly.
          </Text>

          <Text style={[styles.description, { color: theme.text }]}>
            Built with React Native, Redux, Realm Database, Firebase
            Notifications, and Crashlytics, the application delivers a smooth,
            secure, and scalable experience across Android and iOS devices.
          </Text>

          <Text style={[styles.description, { color: theme.text }]}>
            Key Features:
            {'\n\n'}• Property Listings
            {'\n'}• Property Details
            {'\n'}• Appointment Booking
            {'\n'}• Realm Offline Storage
            {'\n'}• Push Notifications
            {'\n'}• User Profile Management
            {'\n'}• Dark / Light Theme Support
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default AboutCGScreen;
