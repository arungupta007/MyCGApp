import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontWeight: '700',
    color: '#0D6EFD',
  },

  iconRow: {
    flexDirection: 'row',
  },

  welcome: {
    marginTop: 20,
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },

  memberText: {
    color: '#fff',
    marginTop: 5,
  },

  memberCard: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 12,
  },

  memberNumber: {
    color: '#fff',
    fontWeight: '600',
  },

  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: -30,
  },

  actionCard: {
    width: '48%',
    backgroundColor: '#FF6B35',
    padding: 20,
    borderRadius: 16,
  },

  actionText: {
    color: '#fff',
    marginTop: 10,
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 20,
    marginTop: 10,
  },

  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  quickItem: {
    alignItems: 'center',
  },

  banner: {
    backgroundColor: '#FFD54F',
    margin: 20,
    borderRadius: 20,
    padding: 20,
  },

  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  bannerText: {
    marginTop: 10,
  },
});
