import { StyleSheet } from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,

      paddingHorizontal: 20,

      paddingTop: 20,
    },

    header: {
      flexDirection: 'row',

      justifyContent: 'space-between',

      alignItems: 'center',

      marginBottom: 30,
    },

    headerTitle: {
      fontSize: 22,

      fontWeight: '700',
    },

    label: {
      fontSize: 16,

      fontWeight: '600',

      marginTop: 20,

      marginBottom: 10,
    },

    error: {
      color: 'red',

      marginTop: 6,

      marginLeft: 5,
    },
  });
};
