import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import ScreenWrapper from '../../../components/common/ScreenWrapper';
import AppButton from '../../../components/common/AppButton/AppButton';
import AppInput from '../../../components/common/AppInput/AppInput';
import { AuthContext } from '../../../store/AuthContext';
import { useStyles } from './styles';

type FormData = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const navigation = useNavigation<NavigationProp<any>>();
  const styles = useStyles();

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
            <AppInput
              placeholder="Email"
              testID="email-input"
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
            <AppInput
              placeholder="Password"
              testID="password-input"
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

        <AppButton
          testID="login-button"
          title="Login"
          onPress={handleSubmit(onSubmit)}
        />
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
