import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,

    marginBottom: 16,

    borderRadius: 18,

    padding: 18,

    elevation: 3,
  },

  header: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  propertyType: {
    fontSize: 20,

    fontWeight: '700',
  },

  homeId: {
    color: '#4A90E2',

    fontWeight: '600',
  },

  price: {
    fontSize: 24,

    fontWeight: '700',

    color: '#4A90E2',

    marginTop: 14,
  },

  featuresRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 20,
  },

  featureItem: {
    alignItems: 'center',
  },

  featureText: {
    marginTop: 6,

    fontSize: 12,
  },
});
