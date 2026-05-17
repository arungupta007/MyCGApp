import { StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

export const useStyles = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    overlay: {
      flex: 1,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      zIndex: 9999,
      elevation: 9999,
    },
    backdrop: {
      flex: 1,

      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalContainer: {
      width: '95%',
      height: '100%',
      padding: 20,
      elevation: 10,
    },

    header: {
      flexDirection: 'row',

      justifyContent: 'space-between',

      alignItems: 'center',

      marginBottom: 20,

      marginTop: 20,
    },

    title: {
      fontSize: 24,

      fontWeight: '700',
    },

    notificationCard: {
      borderRadius: 18,

      padding: 16,

      marginBottom: 16,

      elevation: 3,
    },

    row: {
      flexDirection: 'row',
    },

    content: {
      marginLeft: 14,

      flex: 1,
    },

    notificationTitle: {
      fontSize: 16,

      fontWeight: '700',
    },

    message: {
      marginTop: 6,

      lineHeight: 20,
    },

    time: {
      marginTop: 10,

      color: '#4A90E2',

      fontWeight: '600',
    },
    noNotificationsText: {
      marginTop: 20,
      fontSize: 18,
      color: theme.text,
    },
    emptyContainer: {
      marginTop: 100,
      alignItems: 'center',
    },
  });
};
