import React from 'react';

import { View, Text, StyleSheet, Alert } from 'react-native';

import { Controller, useForm } from 'react-hook-form';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import ScreenWrapper from '../../components/common/ScreenWrapper';

import CustomInput from '../../components/common/CustomInput';

import CustomButton from '../../components/common/CustomButton';

import { useTheme } from '../../hooks/useTheme';

import { AppStackParamList } from '../../navigation/types';

type FormData = {
  title: string;
  description: string;
};

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

const AppointmentFormScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const { theme } = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Appointment Submitted =>', data);

    Alert.alert('Success', 'Appointment booked successfully');

    reset();

    navigation.navigate('MainApp');
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
            Book Appointment
          </Text>

          <View style={{ width: 30 }} />
        </View>
        <Text
          style={[
            styles.label,
            {
              color: theme.text,
            },
          ]}
        >
          {
            'Book your appointment today to discuss property needs, receive personalized advice, and explore tailored investment opportunities with our experts guiding your real estate journey toward success.'
          }
        </Text>

        {/* Title */}

        <Text
          style={[
            styles.label,
            {
              color: theme.text,
            },
          ]}
        >
          Title
        </Text>

        <Controller
          control={control}
          name="title"
          rules={{
            required: 'Title is required',
          }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              placeholder="Enter title"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        {errors.title && (
          <Text style={styles.error}>{errors.title.message}</Text>
        )}

        {/* Description */}

        <Text
          style={[
            styles.label,
            {
              color: theme.text,
            },
          ]}
        >
          Description
        </Text>

        <Controller
          control={control}
          name="description"
          rules={{
            required: 'Description is required',

            minLength: {
              value: 10,

              message: 'Minimum 10 characters',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              placeholder="Enter description"
              value={value}
              onChangeText={onChange}
              multiline
              numberOfLines={5}
              style={styles.descriptionInput}
            />
          )}
        />

        {errors.description && (
          <Text style={styles.error}>{errors.description.message}</Text>
        )}

        {/* Submit Button */}

        <CustomButton
          title="Submit Appointment"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </ScreenWrapper>
  );
};

export default AppointmentFormScreen;

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

    marginBottom: 10,

    marginTop: 20,
  },

  descriptionInput: {
    height: 140,

    textAlignVertical: 'top',

    paddingTop: 14,
  },

  error: {
    color: 'red',

    marginTop: 6,

    marginLeft: 5,
  },
});
