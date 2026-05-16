// import React from 'react';
// import { TextInput, StyleSheet, TextInputProps } from 'react-native';
// import { useTheme } from '../../hooks/useTheme';

// interface CustomInputProps extends TextInputProps {
//   theme?: any;
// }

// const CustomInput = (props: CustomInputProps) => {
//   const { theme } = useTheme();

//   const styles = createStyles(theme);

//   return (
//     <TextInput
//       placeholderTextColor={theme.text}
//       {...props}
//       style={[
//         styles.input,
//         {
//           color: theme.text,
//           borderColor: theme.primary || '#ddd',
//           backgroundColor: theme.card,
//         },
//         props.style,
//       ]}
//     />
//   );
// };

// export default CustomInput;

// const createStyles = (theme: any) =>
//   StyleSheet.create({
//     input: {
//       borderWidth: 1,
//       borderRadius: 10,
//       paddingHorizontal: 14,
//       height: 50,
//       marginTop: 14,
//       fontSize: 16,
//       fontWeight: '500',
//       color: theme.text,
//     },
//   });
//////new
import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '../../hooks/useTheme';

type Props = TextInputProps & {
  secureTextEntry?: boolean;
};

const CustomInput = ({ secureTextEntry = false, style, ...props }: Props) => {
  const { theme } = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.card,

          borderColor: theme.primary || '#ddd',
        },
      ]}
    >
      <TextInput
        {...props}
        style={[
          styles.input,
          {
            color: theme.text,
          },
          style,
        ]}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry && !isPasswordVisible}
      />

      {/* Password Toggle Icon */}

      {secureTextEntry && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          activeOpacity={0.7}
        >
          <Ionicons
            name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
            size={22}
            color={theme.text}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    alignItems: 'center',

    borderWidth: 1,

    borderRadius: 14,

    paddingHorizontal: 16,

    marginTop: 10,
  },

  input: {
    flex: 1,

    height: 55,

    fontSize: 15,
  },
});
