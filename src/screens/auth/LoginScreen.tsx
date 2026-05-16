import React, { useContext } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import ScreenWrapper from '../../components/common/ScreenWrapper';
import CustomButton from '../../components/common/CustomButton';
import CustomInput from '../../components/common/CustomInput';
import { AuthContext } from '../../store/AuthContext';
import { useTheme } from '../../hooks/useTheme';

type FormData = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const navigation = useNavigation<NavigationProp<any>>();
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = () => {
    login();

    // Show success toast
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Login Successful',
      text2: 'Welcome back!',
      // duration: 1000,
      // visibilityDuration: 1000,
    });

    // Redirect to Home after 1 second
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  };

  const handleSignUpPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>

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
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
            />
          )}
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
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
        <TouchableOpacity
          style={styles.forgotContainer}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <CustomButton title="Login" onPress={handleSubmit(onSubmit)} />
        <View style={styles.signUpContainer}>
          <Text style={styles.signUp}>Don't have an account?</Text>
          <Text onPress={handleSignUpPress} style={styles.signUpLink}>
            Sign Up
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,

      paddingHorizontal: 20,

      paddingTop: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: theme.text,
      margin: 20,
    },
    error: {
      color: '#FF6B6B',
      marginLeft: 20,
      marginTop: 5,
      fontSize: 14,
    },
    signUp: {
      textAlign: 'center',
      marginTop: 10,
      color: theme.text,
      fontSize: 14,
    },
    signUpLink: {
      textAlign: 'center',
      marginTop: 10,
      marginLeft: 5,
      color: theme.primary,
      fontWeight: '600',
      fontSize: 14,
    },
    signUpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    forgotContainer: {
      alignItems: 'flex-end',

      marginHorizontal: 20,

      marginTop: 10,

      marginBottom: 20,
    },

    forgotText: {
      color: '#4A90E2',

      fontSize: 14,

      fontWeight: '600',
    },
  });
