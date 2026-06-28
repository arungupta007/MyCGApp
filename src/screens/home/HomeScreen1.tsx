import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ScreenWrapper from '../../components/common/ScreenWrapper';
import { styles } from './styles';

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}

        <LinearGradient colors={['#0D6EFD', '#1E88E5']} style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AG</Text>
            </View>

            <View style={styles.iconRow}>
              <Ionicons name="notifications-outline" size={24} color="#fff" />

              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="#fff"
                style={{ marginLeft: 15 }}
              />
            </View>
          </View>

          <Text style={styles.welcome}>Hello, Arun</Text>

          <Text style={styles.memberText}>MyCG Premium Member</Text>

          {/* USER CARD */}

          <View style={styles.memberCard}>
            <Text style={styles.memberNumber}>Member ID: CG-2026-001</Text>
          </View>
        </LinearGradient>

        {/* ACTION CARDS */}

        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionCard}>
            <Ionicons name="home" size={28} color="#fff" />

            <Text style={styles.actionText}>View Properties</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionCard, { backgroundColor: '#fff' }]}
          >
            <Ionicons name="calendar" size={28} color="#4A90E2" />

            <Text style={[styles.actionText, { color: '#333' }]}>
              Appointments
            </Text>
          </TouchableOpacity>
        </View>

        {/* QUICK LINKS */}

        <Text style={styles.sectionTitle}>Quick Links</Text>

        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.quickItem}>
            <Ionicons name="business" size={22} color="#4A90E2" />
            <Text>Properties</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickItem}>
            <Ionicons name="calendar" size={22} color="#4A90E2" />
            <Text>Appointments</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickItem}>
            <Ionicons name="person" size={22} color="#4A90E2" />
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>

        {/* FEATURED BANNER */}

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Featured Property</Text>

          <Text style={styles.bannerText}>
            Explore premium properties in your preferred location.
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default HomeScreen;
