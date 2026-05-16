import React from 'react';

import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#4A90E2" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
