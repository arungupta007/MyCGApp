import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { Controller, useForm } from 'react-hook-form';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ScreenWrapper from '../../components/common/ScreenWrapper';

import CustomInput from '../../components/common/CustomInput';

import CustomButton from '../../components/common/CustomButton';

import { useTheme } from '../../hooks/useTheme';
import { useAppDispatch } from '../../redux/hooks';

import { setUser } from '../../redux/slices/authSlice';
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createUser } from '../../database/services/userService';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  address: string;
};

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const SignupScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();

  // const { login } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
      address: '',
    },
  });

  const password = watch('password');

  const acceptTerms = watch('acceptTerms');
  const onSubmit = (data: FormData) => {
    if (!data.acceptTerms) {
      Alert.alert('Terms & Conditions', 'Please accept terms and conditions');

      return;
    }

    dispatch(
      setUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        address: data.address,
      }),
    );

    createUser({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
    });

    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Signup Successful',
      text2: 'Welcome!',
    });

    console.log('Signup Data =>', data);

    // login();
    navigation.navigate('Login');
  };
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAwareScrollView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      enableOnAndroid
      extraScrollHeight={120}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
    >
      <ScreenWrapper>
        <View>
          <Text
            style={[
              styles.title,
              {
                color: theme.text,
              },
            ]}
          >
            Create Account
          </Text>

          {/* Full Name */}
          {/* First Name */}

          <Controller
            control={control}
            name="firstName"
            rules={{
              required: 'First name is required',
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                placeholder="First Name"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          {errors.firstName && (
            <Text style={styles.error}>{errors.firstName.message}</Text>
          )}

          {/* Last Name */}

          <Controller
            control={control}
            name="lastName"
            rules={{
              required: 'Last name is required',
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                placeholder="Last Name"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          {errors.lastName && (
            <Text style={styles.error}>{errors.lastName.message}</Text>
          )}

          {/* Password */}

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
              <CustomInput
                placeholder="Password"
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

          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: 'Confirm password required',

              validate: value => value === password || 'Passwords do not match',
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                placeholder="Confirm Password"
                secureTextEntry
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          {errors.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword.message}</Text>
          )}

          {/* Email */}

          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is required',

              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                message: 'Enter valid email',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          {errors.email && (
            <Text style={styles.error}>{errors.email.message}</Text>
          )}

          {/* Phone Number */}

          <Controller
            control={control}
            name="phoneNumber"
            rules={{
              required: 'Phone number is required',

              minLength: {
                value: 10,
                message: 'Enter valid phone number',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                placeholder="Phone Number"
                keyboardType="phone-pad"
                maxLength={10}
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          {errors.phoneNumber && (
            <Text style={styles.error}>{errors.phoneNumber.message}</Text>
          )}

          {/* Address */}

          <Controller
            control={control}
            name="address"
            rules={{
              required: 'Address is required',
              minLength: {
                value: 10,
                message: 'Minimum 10 characters required',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <CustomInput
                placeholder="Address"
                multiline
                numberOfLines={4}
                value={value}
                onChangeText={onChange}
                style={styles.addressInput}
              />
            )}
          />

          {errors.address && (
            <Text style={styles.error}>{errors.address.message}</Text>
          )}

          {/* Terms & Conditions */}

          <TouchableOpacity
            style={styles.termsContainer}
            onPress={() => setValue('acceptTerms', !acceptTerms)}
          >
            <Ionicons
              name={acceptTerms ? 'checkbox' : 'checkbox-outline'}
              size={24}
              color="#4A90E2"
            />
            {/* <ion-icon name="checkbox-outline"></ion-icon> */}
            <Text
              style={[
                styles.termsText,
                {
                  color: theme.text,
                },
              ]}
            >
              I accept Terms & Conditions
            </Text>
          </TouchableOpacity>

          {/* Signup Button */}

          <CustomButton title="Signup" onPress={handleSubmit(onSubmit)} />
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <Text onPress={handleLoginPress} style={styles.loginLink}>
              Login
            </Text>
          </View>
        </View>
      </ScreenWrapper>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,

      paddingHorizontal: 20,

      paddingTop: 20,
    },

    title: {
      fontSize: 30,

      fontWeight: '700',

      marginBottom: 30,
    },

    error: {
      color: 'red',

      marginTop: 5,

      marginLeft: 5,
    },

    termsContainer: {
      flexDirection: 'row',

      alignItems: 'center',

      marginTop: 20,
    },

    termsText: {
      marginLeft: 10,

      fontSize: 14,
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 16,
    },
    loginText: {
      textAlign: 'center',
      color: theme.text,
      fontSize: 14,
    },
    loginLink: {
      textAlign: 'center',
      // color: theme.primary || '#007AFF',
      color: theme.primary,
      marginLeft: 5,
      fontSize: 14,
      fontWeight: '600',
    },
    addressInput: {
      height: 120,
      textAlignVertical: 'top',
      paddingTop: 14,
    },
  });
