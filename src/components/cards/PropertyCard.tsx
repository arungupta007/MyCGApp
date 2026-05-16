import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { PropertyItem } from '../../types/property';

import { useTheme } from '../../hooks/useTheme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppStackParamList } from '../../navigation/types';
import { styles } from './styles';

type Props = {
  item: PropertyItem;
};
type NavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'PropertyDetails'
>;

const PropertyCard = ({ item }: Props) => {
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp>();

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',

    currency: 'INR',

    maximumFractionDigits: 0,
  }).format(item.price_in_inr);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('PropertyDetails', {
          property: item,
        })
      }
    >
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.card,
          },
        ]}
      >
        {/* Header */}

        <View style={styles.header}>
          <Text
            style={[
              styles.propertyType,
              {
                color: theme.text,
              },
            ]}
          >
            {item.type}
          </Text>

          <Text style={styles.homeId}>#{item.home_id}</Text>
        </View>

        {/* Price */}

        <Text style={styles.price}>{formattedPrice}</Text>

        {/* Features */}

        <View style={styles.featuresRow}>
          <View style={styles.featureItem}>
            <Ionicons name="bed-outline" size={20} color="#4A90E2" />

            <Text
              style={[
                styles.featureText,
                {
                  color: theme.text,
                },
              ]}
            >
              {item.features.rooms} Rooms
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="water-outline" size={20} color="#4A90E2" />

            <Text
              style={[
                styles.featureText,
                {
                  color: theme.text,
                },
              ]}
            >
              {item.features.washrooms} Baths
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="restaurant-outline" size={20} color="#4A90E2" />

            <Text
              style={[
                styles.featureText,
                {
                  color: theme.text,
                },
              ]}
            >
              {item.features.kitchens} Kitchen
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyCard;
