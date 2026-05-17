import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingHorizontal: 20,

    paddingTop: 10,

    paddingBottom: 20,
  },

  leftContainer: {
    width: 40,
  },

  rightContainer: {
    width: 40,

    alignItems: 'flex-end',
  },

  title: {
    fontSize: 22,

    fontWeight: '700',
  },
  counterbadge: {
    position: 'absolute',
    right: -4,
    top: -4,
    backgroundColor: 'red',
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countPosition: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
});
