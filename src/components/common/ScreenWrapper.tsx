import React, { ReactNode } from 'react';

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '../../hooks/useTheme';

type Props = {
  children: ReactNode;
};

const ScreenWrapper = ({ children }: Props) => {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});
