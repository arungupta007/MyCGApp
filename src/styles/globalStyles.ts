import { StyleSheet } from 'react-native';

import { FONT_SIZE } from '../theme/typography';
import { SPACING } from '../theme/spacing';

export const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: SPACING.md,
  },

  title: {
    fontSize: FONT_SIZE.xl,
    fontWeight: '700',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
