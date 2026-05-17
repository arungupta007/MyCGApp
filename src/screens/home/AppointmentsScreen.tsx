// import React, { useEffect, useState } from 'react';

// import { View, Text, FlatList, StyleSheet } from 'react-native';

// import Loader from '../../components/common/Loader';

// import Header from '../../components/common/Header';

// import ScreenWrapper from '../../components/common/ScreenWrapper';

// import { getTopHeadlines } from '../../services/newsService';

// import { useTheme } from '../../hooks/useTheme';

// const AppointmentsScreen = () => {
//   const { theme } = useTheme();

//   const [loading, setLoading] = useState(true);

//   const [articles, setArticles] = useState<any[]>([]);

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const fetchNews = async () => {
//     try {
//       const data = await getTopHeadlines();

//       setArticles(data.articles);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <ScreenWrapper>
//       <Header title="News" />

//       <FlatList
//         data={articles}
//         keyExtractor={(_, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View
//             style={[
//               styles.card,
//               {
//                 backgroundColor: theme.card,
//               },
//             ]}
//           >
//             <Text
//               style={[
//                 styles.title,
//                 {
//                   color: theme.text,
//                 },
//               ]}
//             >
//               {item.title}
//             </Text>

//             <Text
//               style={[
//                 styles.description,
//                 {
//                   color: theme.text,
//                 },
//               ]}
//             >
//               {item.description}
//             </Text>
//           </View>
//         )}
//       />
//     </ScreenWrapper>
//   );
// };

// export default AppointmentsScreen;

// const styles = StyleSheet.create({
//   card: {
//     margin: 12,

//     padding: 16,

//     borderRadius: 14,

//     elevation: 3,
//   },

//   title: {
//     fontSize: 18,

//     fontWeight: '700',
//   },

//   description: {
//     marginTop: 10,

//     fontSize: 14,
//   },
// });
///
import React from 'react';

import { View, Text, StyleSheet, Alert } from 'react-native';

import { Controller, useForm } from 'react-hook-form';

import Header from '../../components/common/AppHeader/AppHeader';

import ScreenWrapper from '../../components/common/ScreenWrapper';

import AppInput from '../../components/common/AppInput/AppInput';

import CustomButton from '../../components/common/AppButton/AppButton';

import { useTheme } from '../../hooks/useTheme';

type FormData = {
  title: string;
  description: string;
};

const AppointmentsScreen = () => {
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

    Alert.alert('Success', 'Appointment submitted successfully');

    reset();
  };

  return (
    <>
      <ScreenWrapper>
        <Header title="Appointments" showMenu showNotification />
        <View style={styles.container}>
          {/* Title */}

          <Text
            style={[
              styles.label,
              {
                color: theme.text,
              },
            ]}
          >
            Appointment Title
          </Text>

          <Controller
            control={control}
            name="title"
            rules={{
              required: 'Title is required',
            }}
            render={({ field: { onChange, value } }) => (
              <AppInput
                placeholder="Enter appointment title"
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
              <AppInput
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
    </>
  );
};

export default AppointmentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 20,

    paddingTop: 20,
  },

  label: {
    fontSize: 16,

    fontWeight: '600',

    marginTop: 20,

    marginBottom: 10,
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
});
