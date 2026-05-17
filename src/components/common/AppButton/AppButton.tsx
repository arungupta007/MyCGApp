import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

const AppButton = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
