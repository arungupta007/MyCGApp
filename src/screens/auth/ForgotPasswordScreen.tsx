import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { Controller, useForm } from 'react-hook-form';

import Toast from 'react-native-toast-message';

import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ScreenWrapper from '../../components/common/ScreenWrapper';

import AppInput from '../../components/common/AppInput/AppInput';
import AppButton from '../../components/common/AppButton/AppButton';

import { useTheme } from '../../hooks/useTheme';

import { AuthStackParamList } from '../../navigation/types';

type FormData = {
  password: string;

  confirmPassword: string;
};

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const { theme } = useTheme();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');

  const onSubmit = () => {
    Toast.show({
      type: 'success',

      text1: 'Success',

      text2: 'Password changed successfully',
    });

    reset();

    setTimeout(() => {
      navigation.navigate('Login');
    }, 1200);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}

        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={30}
            color={theme.text}
            onPress={() => navigation.goBack()}
          />

          <Text
            style={[
              styles.headerTitle,
              {
                color: theme.text,
              },
            ]}
          >
            Reset Password
          </Text>

          <View style={{ width: 30 }} />
        </View>

        {/* Password */}

        <Text
          style={[
            styles.label,
            {
              color: theme.text,
            },
          ]}
        >
          New Password
        </Text>

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',

            minLength: {
              value: 6,

              message: 'Minimum 6 characters',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder="Enter new password"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        {/* Confirm Password */}

        <Text
          style={[
            styles.label,
            {
              color: theme.text,
            },
          ]}
        >
          Confirm New Password
        </Text>

        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: 'Confirm password is required',

            validate: value => value === password || 'Passwords do not match',
          }}
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder="Confirm password"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        {errors.confirmPassword && (
          <Text style={styles.error}>{errors.confirmPassword.message}</Text>
        )}

        {/* Submit Button */}

        <AppButton title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 20,

    paddingTop: 20,
  },

  header: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 30,
  },

  headerTitle: {
    fontSize: 22,

    fontWeight: '700',
  },

  label: {
    fontSize: 16,

    fontWeight: '600',

    marginTop: 20,

    marginBottom: 10,
  },

  error: {
    color: 'red',

    marginTop: 6,

    marginLeft: 5,
  },
});
