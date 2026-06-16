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
      fontSize: 28,
      fontWeight: '700',
      color: theme.text,
      margin: 20,
    },
    error: {
      color: '#FF6B6B',
      marginLeft: 20,
      marginTop: 5,
      fontSize: 14,
    },
    signUp: {
      textAlign: 'center',
      marginTop: 10,
      color: theme.text,
      fontSize: 14,
    },
    signUpLink: {
      textAlign: 'center',
      marginTop: 10,
      marginLeft: 5,
      color: theme.primary,
      fontWeight: '600',
      fontSize: 14,
    },
    signUpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    forgotContainer: {
      alignItems: 'flex-end',

      marginHorizontal: 20,

      marginTop: 10,

      marginBottom: 20,
    },

    forgotText: {
      color: '#4A90E2',

      fontSize: 14,

      fontWeight: '600',
    },
  });
};
