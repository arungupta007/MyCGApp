// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import { useTheme } from '../../hooks/useTheme';
// import PropertyCard from '../../components/cards/PropertyCard';
// import { propertyData } from '../../data/propertyData';
// import ScreenWrapper from '../../components/common/ScreenWrapper';
// import Header from '../../components/common/AppHeader/AppHeader';

// const HomeScreen = () => {
//   const { theme } = useTheme();

//   return (
//     <ScreenWrapper>
//       <View
//         style={[
//           // globalStyles.screenContainer,
//           {
//             backgroundColor: theme.background,
//           },
//         ]}
//       >
//         {/* Header */}
//         {/* <Header title="Dashboard" /> */}
//         <Header title="Dashboard" showMenu showNotification />

//         <View
//           style={[
//             styles.townCard,
//             {
//               backgroundColor: theme.card,
//             },
//           ]}
//         >
//           <Text
//             style={[
//               styles.townName,
//               {
//                 color: theme.text,
//               },
//             ]}
//           >
//             {propertyData.town.name}
//           </Text>

//           <Text style={styles.locationText}>
//             📍 Lat: {propertyData.town.coordinates.latitude} | Long:{' '}
//             {propertyData.town.coordinates.longitude}
//           </Text>

//           <Text style={styles.totalHomes}>
//             Total Properties: {propertyData.town.total_homes_available}
//           </Text>
//         </View>

//         <FlatList
//           data={propertyData.listings}
//           keyExtractor={item => item.home_id}
//           showsVerticalScrollIndicator={false}
//           // eslint-disable-next-line react-native/no-inline-styles
//           contentContainerStyle={{
//             paddingBottom: 30,
//           }}
//           renderItem={({ item }) => <PropertyCard item={item} />}
//         />
//       </View>
//     </ScreenWrapper>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     // marginTop: 30,
//   },

//   headerTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//   },

//   card: {
//     padding: 20,
//     borderRadius: 18,

//     marginBottom: 20,

//     elevation: 3,
//   },

//   cardTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//   },

//   cardSubTitle: {
//     marginTop: 10,
//     fontSize: 15,
//   },

//   themeContainer: {
//     padding: 20,

//     borderRadius: 18,

//     flexDirection: 'row',

//     justifyContent: 'space-between',

//     alignItems: 'center',

//     marginBottom: 20,

//     elevation: 3,
//   },

//   themeTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//   },

//   themeSubtitle: {
//     marginTop: 5,
//     fontSize: 13,
//   },

//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },

//   statsCard: {
//     width: '48%',

//     padding: 20,

//     borderRadius: 18,

//     alignItems: 'center',

//     elevation: 3,
//   },

//   statsNumber: {
//     fontSize: 28,
//     fontWeight: '700',

//     marginTop: 10,
//   },

//   statsLabel: {
//     marginTop: 5,
//     fontSize: 14,
//   },
//   locationText: {
//     marginTop: 10,

//     color: '#4A90E2',

//     fontWeight: '500',
//   },

//   totalHomes: {
//     marginTop: 10,

//     fontSize: 16,

//     fontWeight: '600',

//     color: '#4A90E2',
//   },
//   townCard: {
//     padding: 18,

//     borderRadius: 18,

//     marginBottom: 20,

//     elevation: 3,
//   },

//   townName: {
//     fontSize: 22,

//     fontWeight: '700',
//   },
// });
//////new//////
import React, { useMemo, useState } from 'react';

import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '../../hooks/useTheme';

import PropertyCard from '../../components/cards/PropertyCard';

import { propertyData } from '../../data/propertyData';

import ScreenWrapper from '../../components/common/ScreenWrapper';

import Header from '../../components/common/AppHeader/AppHeader';

const HomeScreen = () => {
  const { theme } = useTheme();

  // -----------------------------
  // SEARCH STATE
  // -----------------------------
  const [searchText, setSearchText] = useState('');

  // -----------------------------
  // FILTER DATA
  // -----------------------------
  const filteredProperties = useMemo(() => {
    if (!searchText.trim()) {
      return propertyData.listings;
    }

    return propertyData.listings.filter(item => {
      const search = searchText.toLowerCase();

      return (
        item.home_id.toLowerCase().includes(search) ||
        item.type.toLowerCase().includes(search)
      );
    });
  }, [searchText]);

  return (
    <ScreenWrapper>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.background,
          },
        ]}
      >
        {/* HEADER */}
        <Header title="Dashboard" showMenu showNotification />

        {/* SEARCH BAR */}
        <View
          style={[
            styles.searchContainer,
            {
              backgroundColor: theme.card,
              borderColor: theme.border || '#E5E5E5',
            },
          ]}
        >
          <Ionicons name="search-outline" size={22} color={theme.text} />

          <TextInput
            placeholder="Search by Property ID or Type"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
            style={[
              styles.searchInput,
              {
                color: theme.text,
              },
            ]}
          />

          {searchText?.length > 0 && (
            <Ionicons
              name="close-circle"
              size={20}
              color="#999"
              onPress={() => setSearchText('')}
            />
          )}
        </View>

        {/* TOWN CARD */}
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
            Total Properties: {filteredProperties.length}
          </Text>
        </View>

        {/* PROPERTY LIST */}
        <FlatList
          data={filteredProperties}
          keyExtractor={item => item.home_id}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingBottom: 120,
          }}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Ionicons name="search-outline" size={70} color="#B0B0B0" />

              <Text
                style={[
                  styles.emptyText,
                  {
                    color: theme.text,
                  },
                ]}
              >
                No Property Found
              </Text>
            </View>
          )}
          renderItem={({ item }) => <PropertyCard item={item} />}
        />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // -----------------------------
  // SEARCH
  // -----------------------------
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
    marginBottom: 18,
    height: 56,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },

  // -----------------------------
  // TOWN CARD
  // -----------------------------
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

  // -----------------------------
  // EMPTY STATE
  // -----------------------------
  emptyContainer: {
    marginTop: 100,
    alignItems: 'center',
  },

  emptyText: {
    marginTop: 14,
    fontSize: 18,
    fontWeight: '600',
  },
});
