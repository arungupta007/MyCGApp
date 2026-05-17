import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/common/AppHeader/AppHeader';

import ScreenWrapper from '../../components/common/ScreenWrapper';

import { useTheme } from '../../hooks/useTheme';

import { getAppointments } from '../../database/services/appointmentService';

const AppointmentsScreen = () => {
  const { theme } = useTheme();

  const styles = createStyles(theme);

  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const data = getAppointments();

    setAppointments([...data]);
  }, []);

  console.log('Appointments =>', appointments);

  // -----------------------------
  // RENDER APPOINTMENT CARD
  // -----------------------------
  const renderAppointmentCard = ({ item }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.card,
          {
            backgroundColor: theme.card,
          },
        ]}
      >
        {/* TOP ROW */}
        <View style={styles.topRow}>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: '#4A90E220',
              },
            ]}
          >
            <Ionicons name="calendar-outline" size={26} color="#4A90E2" />
          </View>

          <View style={styles.titleContainer}>
            <Text
              style={[
                styles.title,
                {
                  color: theme.text,
                },
              ]}
            >
              {item.title}
            </Text>

            <Text style={styles.propertyId}>
              Property ID: {item.propertyId}
            </Text>
          </View>
        </View>

        {/* DESCRIPTION */}
        <Text
          style={[
            styles.description,
            {
              color: theme.text,
            },
          ]}
        >
          {item.description}
        </Text>

        {/* STATUS */}
        <View style={styles.bottomRow}>
          <View style={styles.statusContainer}>
            <View style={styles.statusDot} />

            <Text style={styles.statusText}>Appointment Requested</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper>
      <Header title="Appointments" showMenu showNotification />

      <View style={styles.container}>
        {/* TOTAL COUNT */}
        <Text
          style={[
            styles.totalText,
            {
              color: theme.text,
            },
          ]}
        >
          {appointments.length} Appointments Found
        </Text>

        {/* EMPTY STATE */}
        {appointments.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="document-text-outline" size={70} color="#B0B0B0" />

            <Text
              style={[
                styles.emptyText,
                {
                  color: theme.text,
                },
              ]}
            >
              No appointments available
            </Text>
          </View>
        ) : (
          <FlatList
            data={appointments}
            keyExtractor={(item, index) => `${item.propertyId}-${index}`}
            renderItem={renderAppointmentCard}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 120,
            }}
          />
        )}
      </View>
    </ScreenWrapper>
  );
};

export default AppointmentsScreen;

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 10,
    },

    totalText: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 18,
    },

    card: {
      borderRadius: 18,
      padding: 18,
      marginBottom: 16,
      elevation: 3,
    },

    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    iconContainer: {
      width: 56,
      height: 56,
      borderRadius: 14,
      justifyContent: 'center',
      alignItems: 'center',
    },

    titleContainer: {
      flex: 1,
      marginLeft: 14,
    },

    title: {
      fontSize: 18,
      fontWeight: '700',
    },

    propertyId: {
      marginTop: 6,
      color: '#4A90E2',
      fontWeight: '600',
      fontSize: 13,
    },

    description: {
      marginTop: 18,
      lineHeight: 22,
      fontSize: 15,
    },

    bottomRow: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    statusDot: {
      width: 10,
      height: 10,
      borderRadius: 10,
      backgroundColor: '#34C759',
      marginRight: 8,
    },

    statusText: {
      color: '#34C759',
      fontWeight: '700',
    },

    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
    },

    emptyText: {
      marginTop: 16,
      fontSize: 18,
      fontWeight: '600',
    },
  });
