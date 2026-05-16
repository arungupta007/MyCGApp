import React from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import ScreenWrapper from '../../components/common/ScreenWrapper';

import { useTheme } from '../../hooks/useTheme';

import { PropertyItem } from '../../types/property';
import CustomButton from '../../components/common/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/types';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

type RootStackParamList = {
  PropertyDetails: {
    property: PropertyItem;
  };
};

type PropertyDetailsRouteProp = RouteProp<
  RootStackParamList,
  'PropertyDetails'
>;

const PropertyDetailsScreen = () => {
  const { theme } = useTheme();

  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<PropertyDetailsRouteProp>();

  const { property } = route.params;

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(property.price_in_inr);

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Back Button */}

        {/* <Ionicons
          name="arrow-back"
          size={30}
          color={theme.text}
          onPress={() => navigation.goBack()}
        /> */}
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={30}
            color={theme.text}
            onPress={() => navigation.goBack()}
          />

          <Text
            style={[
              styles.headerTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Property Details
          </Text>

          {/* Empty View for Alignment */}

          <View style={{ width: 30 }} />
        </View>

        {/* Property Type */}

        <Text
          style={[
            styles.title,
            {
              color: theme.text,
            },
          ]}
        >
          {property.type}
        </Text>

        {/* Property ID */}

        <Text style={styles.propertyId}>Property ID: {property.home_id}</Text>

        {/* Price */}

        <View style={styles.priceCard}>
          <Text style={styles.priceLabel}>Property Price</Text>

          <Text style={styles.price}>{formattedPrice}</Text>
        </View>

        {/* Features */}

        <View
          style={[
            styles.featureCard,
            {
              backgroundColor: theme.card,
            },
          ]}
        >
          <Text
            style={[
              styles.sectionTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Property Features
          </Text>

          <View style={styles.featureRow}>
            <Ionicons name="bed-outline" size={24} color="#4A90E2" />

            <Text
              style={[
                styles.featureText,
                {
                  color: theme.text,
                },
              ]}
            >
              Rooms: {property.features.rooms}
            </Text>
          </View>

          <View style={styles.featureRow}>
            <Ionicons name="water-outline" size={24} color="#4A90E2" />

            <Text
              style={[
                styles.featureText,
                {
                  color: theme.text,
                },
              ]}
            >
              Washrooms: {property.features.washrooms}
            </Text>
          </View>

          <View style={styles.featureRow}>
            <Ionicons name="restaurant-outline" size={24} color="#4A90E2" />

            <Text
              style={[
                styles.featureText,
                {
                  color: theme.text,
                },
              ]}
            >
              Kitchens: {property.features.kitchens}
            </Text>
          </View>
        </View>

        {/* Description */}

        <View
          style={[
            styles.descriptionCard,
            {
              backgroundColor: theme.card,
            },
          ]}
        >
          <Text
            style={[
              styles.sectionTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Description
          </Text>

          <Text
            style={[
              styles.description,
              {
                color: theme.text,
              },
            ]}
          >
            This is a premium property located in a prime area with modern
            facilities and spacious interiors. Perfect for families and
            investment opportunities.
          </Text>
        </View>

        <CustomButton
          title="Book An Appointment"
          onPress={() => navigation.navigate('AppointmentForm')}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default PropertyDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
  },

  propertyId: {
    marginTop: 10,
    color: '#4A90E2',
    fontWeight: '600',
  },

  priceCard: {
    backgroundColor: '#4A90E2',

    padding: 24,

    borderRadius: 20,

    marginTop: 30,
  },

  priceLabel: {
    color: '#fff',

    fontSize: 16,
  },

  price: {
    color: '#fff',

    fontSize: 32,

    fontWeight: '700',

    marginTop: 10,
  },

  featureCard: {
    marginTop: 24,

    borderRadius: 18,

    padding: 20,

    elevation: 3,
  },

  sectionTitle: {
    fontSize: 20,

    fontWeight: '700',

    marginBottom: 20,
  },

  featureRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,
  },

  featureText: {
    fontSize: 16,

    marginLeft: 14,
  },

  descriptionCard: {
    marginTop: 24,

    borderRadius: 18,

    padding: 20,

    elevation: 3,

    marginBottom: 40,
  },

  description: {
    lineHeight: 24,

    fontSize: 15,
  },
  header: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 22,

    fontWeight: '700',
  },
});
