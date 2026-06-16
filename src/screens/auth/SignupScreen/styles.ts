import { StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

export const useStyles = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,

      paddingHorizontal: 20,

      paddingTop: 20,
    },

    title: {
      fontSize: 30,

      fontWeight: '700',

      marginBottom: 30,
    },

    error: {
      color: 'red',

      marginTop: 5,

      marginLeft: 5,
    },

    termsContainer: {
      flexDirection: 'row',

      alignItems: 'center',

      marginTop: 20,
    },

    termsText: {
      marginLeft: 10,

      fontSize: 14,
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 16,
    },
    loginText: {
      textAlign: 'center',
      color: theme.text,
      fontSize: 14,
    },
    loginLink: {
      textAlign: 'center',
      // color: theme.primary || '#007AFF',
      color: theme.primary,
      marginLeft: 5,
      fontSize: 14,
      fontWeight: '600',
    },
    addressInput: {
      height: 120,
      textAlignVertical: 'top',
      paddingTop: 14,
    },
  });
};
