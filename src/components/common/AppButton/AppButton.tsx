import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  testID?: string;
};

const AppButton = ({ title, onPress, testID }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} testID={testID}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
