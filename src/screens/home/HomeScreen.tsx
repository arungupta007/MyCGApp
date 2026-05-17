import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import PropertyCard from '../../components/cards/PropertyCard';
import { propertyData } from '../../data/propertyData';
import ScreenWrapper from '../../components/common/ScreenWrapper';
import Header from '../../components/common/AppHeader/AppHeader';

const HomeScreen = () => {
  const { theme } = useTheme();

  return (
    <ScreenWrapper>
      <View
        style={[
          // globalStyles.screenContainer,
          {
            backgroundColor: theme.background,
          },
        ]}
      >
        {/* Header */}
        {/* <Header title="Dashboard" /> */}
        <Header title="Dashboard" showMenu showNotification />

        <View
          style={[
            styles.townCard,
            {
              backgroundColor: theme.card,
            },
          ]}
        >
          <Text
            style={[
              styles.townName,
              {
                color: theme.text,
              },
            ]}
          >
            {propertyData.town.name}
          </Text>

          <Text style={styles.locationText}>
            📍 Lat: {propertyData.town.coordinates.latitude} | Long:{' '}
            {propertyData.town.coordinates.longitude}
          </Text>

          <Text style={styles.totalHomes}>
            Total Properties: {propertyData.town.total_homes_available}
          </Text>
        </View>

        <FlatList
          data={propertyData.listings}
          keyExtractor={item => item.home_id}
          showsVerticalScrollIndicator={false}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            paddingBottom: 30,
          }}
          renderItem={({ item }) => <PropertyCard item={item} />}
        />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 30,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
  },

  card: {
    padding: 20,
    borderRadius: 18,

    marginBottom: 20,

    elevation: 3,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
  },

  cardSubTitle: {
    marginTop: 10,
    fontSize: 15,
  },

  themeContainer: {
    padding: 20,

    borderRadius: 18,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

    elevation: 3,
  },

  themeTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  themeSubtitle: {
    marginTop: 5,
    fontSize: 13,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statsCard: {
    width: '48%',

    padding: 20,

    borderRadius: 18,

    alignItems: 'center',

    elevation: 3,
  },

  statsNumber: {
    fontSize: 28,
    fontWeight: '700',

    marginTop: 10,
  },

  statsLabel: {
    marginTop: 5,
    fontSize: 14,
  },
  locationText: {
    marginTop: 10,

    color: '#4A90E2',

    fontWeight: '500',
  },

  totalHomes: {
    marginTop: 10,

    fontSize: 16,

    fontWeight: '600',

    color: '#4A90E2',
  },
  townCard: {
    padding: 18,

    borderRadius: 18,

    marginBottom: 20,

    elevation: 3,
  },

  townName: {
    fontSize: 22,

    fontWeight: '700',
  },
});
