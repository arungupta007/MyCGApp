import React from 'react';

import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

const AppLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#4A90E2" />
    </View>
  );
};

export default AppLoader;
