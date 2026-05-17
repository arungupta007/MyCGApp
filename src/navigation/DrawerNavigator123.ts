import { StyleSheet } from 'react-native';
export const createStyles = (theme: any) =>
  StyleSheet.create({
    drawerContentContainer: {
      flex: 1,
    },
    scrollViewContent: {
      flex: 1,
    },
    themeContainer: {
      borderTopWidth: 1,
      borderTopColor: theme.primary || '#5e5959',
      marginTop: 16,
      paddingTop: 16,
      paddingHorizontal: 16,
    },
    themeCard: {
      backgroundColor: theme.card,
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    },
    themeContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    themeTextWrapper: {
      flex: 1,
      marginRight: 12,
    },
    themeTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 4,
    },
    themeSubtitle: {
      fontSize: 14,
      color: theme.text,
      opacity: 0.7,
    },
    logoutContainer: {
      borderTopWidth: 1,
      borderTopColor: theme.primary || '#5e5959',
      padding: 16,
      marginTop: 'auto',
    },
    logoutButton: {
      backgroundColor: theme.primary,
      borderRadius: 8,
      padding: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoutText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 8,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: theme.card,
      borderRadius: 12,
      padding: 24,
      width: '80%',
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
      marginBottom: 12,
    },
    modalMessage: {
      fontSize: 14,
      color: theme.text,
      marginBottom: 24,
      textAlign: 'center',
    },
    modalButtonContainer: {
      flexDirection: 'row',
      gap: 12,
      width: '100%',
    },
    modalButton: {
      flex: 1,
      paddingVertical: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: '#ccc',
    },
    confirmButton: {
      backgroundColor: '#E74C3C',
    },
    buttonText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#fff',
    },
  });
