// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
//   KeyboardAvoidingView,
// } from 'react-native';

// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useTheme } from '../../hooks/useTheme';
// import { useAppSelector, useAppDispatch } from '../../redux/hooks';
// import { setUser } from '../../redux/slices/authSlice';
// // import { getUser } from '../../database/services/userService';
// import Toast from 'react-native-toast-message';
// // import { updateUser } from '../../database/services/userService';

// const ProfileScreen = () => {
//   const { theme } = useTheme();

//   const dispatch = useAppDispatch();

//   const user = useAppSelector(state => state.auth.user);
//   // const reduxUser = useAppSelector(state => state.auth.user);

//   // const realmUser = getUser();

//   // const user = realmUser || reduxUser;

//   const styles = createStyles(theme);

//   // -----------------------------
//   // EDIT MODE
//   // -----------------------------
//   const [isEditing, setIsEditing] = useState(false);

//   // -----------------------------
//   // SAFE DEFAULT DATA
//   // -----------------------------
//   const fallbackData = {
//     firstName: 'Dummy',
//     lastName: 'Dummy',
//     email: 'dummy@example.com',
//     phoneNumber: '+91 99999 88888',
//     address: '123 Main Street, New Delhi, India',
//   };

//   // -----------------------------
//   // MAIN DISPLAY DATA
//   // -----------------------------
//   const profileData = user || fallbackData;

//   // -----------------------------
//   // TEMP EDIT DATA
//   // -----------------------------
//   const [tempData, setTempData] = useState(profileData);

//   // -----------------------------
//   // SYNC REDUX DATA
//   // -----------------------------
//   useEffect(() => {
//     setTempData(profileData);
//   }, [user]);

//   // -----------------------------
//   // HANDLE INPUT CHANGE
//   // -----------------------------
//   const handleInputChange = (field: string, value: string) => {
//     setTempData(prev => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   // -----------------------------
//   // SAVE TO REDUX
//   // -----------------------------
//   const onSave = () => {
//     const updatedUser = {
//       firstName: tempData.firstName.trim(),
//       lastName: tempData.lastName.trim(),
//       email: tempData.email.trim(),
//       phoneNumber: tempData.phoneNumber.trim(),
//       address: tempData.address.trim(),
//     };

//     dispatch(setUser(updatedUser));
//     if (realmUser?._id) {
//       updateUser(realmUser._id, updatedUser);
//     }

//     setIsEditing(false);

//     Toast.show({
//       type: 'success',
//       text1: 'Profile Updated',
//       text2: 'Changes saved successfully',
//     });
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <KeyboardAwareScrollView
//           style={[
//             styles.container,
//             {
//               backgroundColor: theme.background,
//             },
//           ]}
//           keyboardShouldPersistTaps="handled"
//           showsVerticalScrollIndicator={false}
//           enableOnAndroid
//           extraScrollHeight={120}
//           contentContainerStyle={{
//             paddingBottom: 120,
//           }}
//         >
//           {/* HEADER CARD */}
//           <View
//             style={[
//               styles.headerCard,
//               {
//                 backgroundColor: theme.card,
//               },
//             ]}
//           >
//             <View style={styles.avatarContainer}>
//               <View
//                 style={[
//                   styles.avatar,
//                   {
//                     backgroundColor: theme.primary || '#007AFF',
//                   },
//                 ]}
//               >
//                 <Text style={styles.avatarText}>
//                   {profileData.firstName[0]}
//                   {profileData.lastName[0]}
//                 </Text>
//               </View>
//             </View>

//             <Text
//               style={[
//                 styles.fullName,
//                 {
//                   color: theme.text,
//                 },
//               ]}
//             >
//               {profileData.firstName} {profileData.lastName}
//             </Text>

//             <Text
//               style={[
//                 styles.email,
//                 {
//                   color: theme.text,
//                   opacity: 0.7,
//                 },
//               ]}
//             >
//               {profileData.email}
//             </Text>
//           </View>

//           {/* EDIT BUTTON */}
//           <TouchableOpacity
//             style={[
//               styles.editButtonContainer,
//               {
//                 backgroundColor: theme.card,
//               },
//             ]}
//             onPress={() => {
//               if (isEditing) {
//                 onSave();
//               } else {
//                 setIsEditing(true);
//               }
//             }}
//           >
//             <Ionicons
//               name={isEditing ? 'save-outline' : 'pencil'}
//               size={20}
//               color={theme.primary || '#007AFF'}
//             />

//             <Text
//               style={[
//                 styles.editButtonText,
//                 {
//                   color: theme.primary || '#007AFF',
//                 },
//               ]}
//             >
//               {isEditing ? 'Save Changes' : 'Edit Profile'}
//             </Text>
//           </TouchableOpacity>

//           {/* CANCEL BUTTON */}
//           {isEditing && (
//             <TouchableOpacity
//               style={[
//                 styles.editButtonContainer,
//                 {
//                   backgroundColor: theme.card,
//                   marginTop: 0,
//                 },
//               ]}
//               onPress={() => {
//                 setTempData(profileData);
//                 setIsEditing(false);
//               }}
//             >
//               <Ionicons name="close" size={20} color="#FF6B6B" />

//               <Text
//                 style={[
//                   styles.editButtonText,
//                   {
//                     color: '#FF6B6B',
//                   },
//                 ]}
//               >
//                 Cancel
//               </Text>
//             </TouchableOpacity>
//           )}

//           {/* PROFILE INFORMATION */}
//           <View
//             style={[
//               styles.infoCard,
//               {
//                 backgroundColor: theme.card,
//               },
//             ]}
//           >
//             {/* FIRST NAME */}
//             <View style={styles.fieldContainer}>
//               <View style={styles.fieldHeader}>
//                 <Ionicons name="person" size={18} color={theme.primary} />

//                 <Text
//                   style={[
//                     styles.fieldLabel,
//                     {
//                       color: theme.text,
//                     },
//                   ]}
//                 >
//                   First Name
//                 </Text>
//               </View>

//               {isEditing ? (
//                 <TextInput
//                   style={[
//                     styles.input,
//                     {
//                       color: theme.text,
//                       borderColor: theme.primary,
//                     },
//                   ]}
//                   value={tempData.firstName}
//                   onChangeText={v => handleInputChange('firstName', v)}
//                 />
//               ) : (
//                 <Text
//                   style={[
//                     styles.fieldValue,
//                     {
//                       color: theme.text,
//                     },
//                   ]}
//                 >
//                   {profileData.firstName}
//                 </Text>
//               )}
//             </View>

//             {/* LAST NAME */}
//             <View style={styles.fieldContainer}>
//               <View style={styles.fieldHeader}>
//                 <Ionicons name="person" size={18} color={theme.primary} />

//                 <Text
//                   style={[
//                     styles.fieldLabel,
//                     {
//                       color: theme.text,
//                     },
//                   ]}
//                 >
//                   Last Name
//                 </Text>
//               </View>

//               {isEditing ? (
//                 <TextInput
//                   style={[
//                     styles.input,
//                     {
//                       color: theme.text,
//                       borderColor: theme.primary,
//                     },
//                   ]}
//                   value={tempData.lastName}
//                   onChangeText={v => handleInputChange('lastName', v)}
//                 />
//               ) : (
//                 <Text
//                   style={[
//                     styles.fieldValue,
//                     {
//                       color: theme.text,
//                     },
//                   ]}
//                 >
//                   {profileData.lastName}
//                 </Text>
//               )}
//             </View>

//             {/* EMAIL */}
//             <View style={styles.fieldContainer}>
//               <View style={styles.fieldHeader}>
//                 <Ionicons name="mail" size={18} color={theme.primary} />

//                 <Text
//                   style={[
//                     styles.fieldLabel,
//                     {
//                       color: theme.text,
//                     },
//                   ]}
//                 >
//                   Email
//                 </Text>
//               </View>

//               <Text
//                 style={[
//                   styles.fieldValue,
//                   {
//                     color: theme.text,
//                   },
//                 ]}
//               >
//                 {profileData.email}
//               </Text>
//             </View>

//             {/* PHONE NUMBER */}
//             <View style={styles.fieldContainer}>
//               <View style={styles.fieldHeader}>
//                 <Ionicons name="call" size={18} color={theme.primary} />

//                 <Text
//                   style={[
//                     styles.fieldLabel,
//                     {
//                       color: theme.text,
//                     },
//                   ]}
//                 >
//                   Phone Number
//                 </Text>
//               </View>

//               {isEditing ? (
//                 <TextInput
//                   style={[
//                     styles.input,
//                     {
//                       color: theme.text,
//                       borderColor: theme.primary,
//                     },
//                   ]}
//                   value={tempData.phoneNumber}
//                   onChangeText={v => handleInputChange('phoneNumber', v)}
//                   keyboardType="phone-pad"
//                   returnKeyType="done"
//                 />
//               ) : (
//                 <Text
//                   style={[
//                     styles.fieldValue,
//                     {
//                       color: theme.text,
//                     },
//                   ]}
//                 >
//                   {profileData.phoneNumber}
//                 </Text>
//               )}
//             </View>

//             {/* ADDRESS */}
//             <View
//               style={[
//                 styles.fieldContainer,
//                 {
//                   borderBottomWidth: 0,
//                 },
//               ]}
//             >
//               <View style={styles.fieldHeader}>
//                 <Ionicons name="location" size={18} color={theme.primary} />

//                 <Text
//                   style={[
//                     styles.fieldLabel,
//                     {
//                       color: theme.text,
//                     },
//                   ]}
//                 >
//                   Address
//                 </Text>
//               </View>

//               {isEditing ? (
//                 <TextInput
//                   style={[
//                     styles.input,
//                     styles.multilineInput,
//                     {
//                       color: theme.text,
//                       borderColor: theme.primary,
//                     },
//                   ]}
//                   value={tempData.address}
//                   onChangeText={v => handleInputChange('address', v)}
//                   multiline
//                   numberOfLines={4}
//                   scrollEnabled={false}
//                   textAlignVertical="top"
//                   returnKeyType="done"
//                 />
//               ) : (
//                 <Text
//                   style={[
//                     styles.fieldValue,
//                     {
//                       color: theme.text,
//                     },
//                   ]}
//                 >
//                   {profileData.address}
//                 </Text>
//               )}
//             </View>
//           </View>

//           <View style={{ height: 20 }} />
//         </KeyboardAwareScrollView>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// export default ProfileScreen;

// const createStyles = (theme: any) =>
//   StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 16,
//     },

//     headerCard: {
//       borderRadius: 12,
//       padding: 24,
//       marginBottom: 16,
//       alignItems: 'center',
//       elevation: 3,
//     },

//     avatarContainer: {
//       marginBottom: 16,
//     },

//     avatar: {
//       width: 80,
//       height: 80,
//       borderRadius: 40,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },

//     avatarText: {
//       fontSize: 32,
//       fontWeight: '700',
//       color: theme.white,
//     },

//     fullName: {
//       fontSize: 24,
//       fontWeight: '700',
//       marginBottom: 4,
//     },

//     email: {
//       fontSize: 14,
//     },

//     editButtonContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingVertical: 12,
//       borderRadius: 8,
//       marginBottom: 16,
//       elevation: 2,
//     },

//     editButtonText: {
//       fontSize: 16,
//       fontWeight: '600',
//       marginLeft: 8,
//     },

//     infoCard: {
//       borderRadius: 12,
//       padding: 20,
//       elevation: 3,
//     },

//     fieldContainer: {
//       marginBottom: 20,
//       paddingBottom: 20,
//       borderBottomWidth: 1,
//       borderBottomColor: 'rgba(0,0,0,0.1)',
//     },

//     fieldHeader: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 8,
//     },

//     fieldLabel: {
//       fontSize: 14,
//       fontWeight: '600',
//       marginLeft: 8,
//     },

//     fieldValue: {
//       fontSize: 16,
//       marginTop: 4,
//       fontWeight: '500',
//     },

//     input: {
//       borderWidth: 1,
//       borderRadius: 8,
//       paddingHorizontal: 12,
//       paddingVertical: 10,
//       marginTop: 8,
//       fontSize: 16,
//     },

//     multilineInput: {
//       minHeight: 120,
//       textAlignVertical: 'top',
//       paddingTop: 12,
//     },
//   });
///////new/////
import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '../../hooks/useTheme';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { setUser } from '../../redux/slices/authSlice';

import Toast from 'react-native-toast-message';

import { getUser, updateUser } from '../../database/services/userService';

const ProfileScreen = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  // -----------------------------
  // REDUX USER
  // -----------------------------
  const reduxUser = useAppSelector(state => state.auth.user);

  // -----------------------------
  // REALM USER
  // -----------------------------
  const realmUser = getUser();

  // -----------------------------
  // USER PRIORITY
  // -----------------------------
  const user = realmUser || reduxUser;

  const styles = createStyles(theme);

  // -----------------------------
  // EDIT MODE
  // -----------------------------
  const [isEditing, setIsEditing] = useState(false);

  // -----------------------------
  // FALLBACK DATA
  // -----------------------------
  const fallbackData = {
    firstName: 'Dummy',
    lastName: 'User',
    email: 'dummy@example.com',
    phoneNumber: '+91 99999 88888',
    address: '123 Main Street, New Delhi, India',
  };

  // -----------------------------
  // PROFILE DATA
  // -----------------------------
  const profileData = user || fallbackData;

  // -----------------------------
  // TEMP EDIT DATA
  // -----------------------------
  const [tempData, setTempData] = useState({
    firstName: profileData.firstName,
    lastName: profileData.lastName,
    email: profileData.email,
    phoneNumber: profileData.phoneNumber,
    address: profileData.address,
  });

  // -----------------------------
  // SYNC DATA
  // -----------------------------
  useEffect(() => {
    setTempData(profileData);
  }, [reduxUser]);

  // -----------------------------
  // HANDLE INPUT CHANGE
  // -----------------------------
  const handleInputChange = (field: string, value: string) => {
    setTempData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // -----------------------------
  // SAVE PROFILE
  // -----------------------------
  const onSave = () => {
    const updatedUser = {
      firstName: tempData.firstName.trim(),

      lastName: tempData.lastName.trim(),

      email: tempData.email.trim(),

      phoneNumber: tempData.phoneNumber.trim(),

      address: tempData.address.trim(),
    };

    // -----------------------------
    // UPDATE REDUX
    // -----------------------------
    dispatch(setUser(updatedUser));

    // -----------------------------
    // UPDATE REALM
    // -----------------------------
    if (realmUser?._id) {
      updateUser(realmUser._id, updatedUser);
    }

    // -----------------------------
    // EXIT EDIT MODE
    // -----------------------------
    setIsEditing(false);

    // -----------------------------
    // TOAST
    // -----------------------------
    Toast.show({
      type: 'success',
      text1: 'Profile Updated',
      text2: 'Changes saved successfully',
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          {/* HEADER CARD */}
          <View
            style={[
              styles.headerCard,
              {
                backgroundColor: theme.card,
              },
            ]}
          >
            <View style={styles.avatarContainer}>
              <View
                style={[
                  styles.avatar,
                  {
                    backgroundColor: theme.primary || '#007AFF',
                  },
                ]}
              >
                <Text style={styles.avatarText}>
                  {profileData.firstName?.[0]}
                  {profileData.lastName?.[0]}
                </Text>
              </View>
            </View>

            <Text
              style={[
                styles.fullName,
                {
                  color: theme.text,
                },
              ]}
            >
              {profileData.firstName} {profileData.lastName}
            </Text>

            <Text
              style={[
                styles.email,
                {
                  color: theme.text,
                  opacity: 0.7,
                },
              ]}
            >
              {profileData.email}
            </Text>
          </View>

          {/* EDIT BUTTON */}
          <TouchableOpacity
            style={[
              styles.editButtonContainer,
              {
                backgroundColor: theme.card,
              },
            ]}
            onPress={() => {
              if (isEditing) {
                onSave();
              } else {
                setIsEditing(true);
              }
            }}
          >
            <Ionicons
              name={isEditing ? 'save-outline' : 'pencil'}
              size={20}
              color={theme.primary || '#007AFF'}
            />

            <Text
              style={[
                styles.editButtonText,
                {
                  color: theme.primary || '#007AFF',
                },
              ]}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Text>
          </TouchableOpacity>

          {/* CANCEL BUTTON */}
          {isEditing && (
            <TouchableOpacity
              style={[
                styles.editButtonContainer,
                {
                  backgroundColor: theme.card,
                  marginTop: 0,
                },
              ]}
              onPress={() => {
                setTempData(profileData);

                setIsEditing(false);
              }}
            >
              <Ionicons name="close" size={20} color="#FF6B6B" />

              <Text
                style={[
                  styles.editButtonText,
                  {
                    color: '#FF6B6B',
                  },
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          )}

          {/* PROFILE INFORMATION */}
          <View
            style={[
              styles.infoCard,
              {
                backgroundColor: theme.card,
              },
            ]}
          >
            {/* FIRST NAME */}
            <View style={styles.fieldContainer}>
              <View style={styles.fieldHeader}>
                <Ionicons name="person" size={18} color={theme.primary} />

                <Text
                  style={[
                    styles.fieldLabel,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  First Name
                </Text>
              </View>

              {isEditing ? (
                <TextInput
                  style={[
                    styles.input,
                    {
                      color: theme.text,
                      borderColor: theme.primary,
                    },
                  ]}
                  value={tempData.firstName}
                  onChangeText={v => handleInputChange('firstName', v)}
                />
              ) : (
                <Text
                  style={[
                    styles.fieldValue,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  {profileData.firstName}
                </Text>
              )}
            </View>

            {/* LAST NAME */}
            <View style={styles.fieldContainer}>
              <View style={styles.fieldHeader}>
                <Ionicons name="person" size={18} color={theme.primary} />

                <Text
                  style={[
                    styles.fieldLabel,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  Last Name
                </Text>
              </View>

              {isEditing ? (
                <TextInput
                  style={[
                    styles.input,
                    {
                      color: theme.text,
                      borderColor: theme.primary,
                    },
                  ]}
                  value={tempData.lastName}
                  onChangeText={v => handleInputChange('lastName', v)}
                />
              ) : (
                <Text
                  style={[
                    styles.fieldValue,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  {profileData.lastName}
                </Text>
              )}
            </View>

            {/* EMAIL */}
            <View style={styles.fieldContainer}>
              <View style={styles.fieldHeader}>
                <Ionicons name="mail" size={18} color={theme.primary} />

                <Text
                  style={[
                    styles.fieldLabel,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  Email
                </Text>
              </View>

              <Text
                style={[
                  styles.fieldValue,
                  {
                    color: theme.text,
                  },
                ]}
              >
                {profileData.email}
              </Text>
            </View>

            {/* PHONE NUMBER */}
            <View style={styles.fieldContainer}>
              <View style={styles.fieldHeader}>
                <Ionicons name="call" size={18} color={theme.primary} />

                <Text
                  style={[
                    styles.fieldLabel,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  Phone Number
                </Text>
              </View>

              {isEditing ? (
                <TextInput
                  style={[
                    styles.input,
                    {
                      color: theme.text,
                      borderColor: theme.primary,
                    },
                  ]}
                  value={tempData.phoneNumber}
                  onChangeText={v => handleInputChange('phoneNumber', v)}
                  keyboardType="phone-pad"
                  returnKeyType="done"
                />
              ) : (
                <Text
                  style={[
                    styles.fieldValue,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  {profileData.phoneNumber}
                </Text>
              )}
            </View>

            {/* ADDRESS */}
            <View
              style={[
                styles.fieldContainer,
                {
                  borderBottomWidth: 0,
                },
              ]}
            >
              <View style={styles.fieldHeader}>
                <Ionicons name="location" size={18} color={theme.primary} />

                <Text
                  style={[
                    styles.fieldLabel,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  Address
                </Text>
              </View>

              {isEditing ? (
                <TextInput
                  style={[
                    styles.input,
                    styles.multilineInput,
                    {
                      color: theme.text,
                      borderColor: theme.primary,
                    },
                  ]}
                  value={tempData.address}
                  onChangeText={v => handleInputChange('address', v)}
                  multiline
                  numberOfLines={4}
                  scrollEnabled={false}
                  textAlignVertical="top"
                  returnKeyType="done"
                />
              ) : (
                <Text
                  style={[
                    styles.fieldValue,
                    {
                      color: theme.text,
                    },
                  ]}
                >
                  {profileData.address}
                </Text>
              )}
            </View>
          </View>

          <View style={{ height: 20 }} />
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },

    headerCard: {
      borderRadius: 12,
      padding: 24,
      marginBottom: 16,
      alignItems: 'center',
      elevation: 3,
    },

    avatarContainer: {
      marginBottom: 16,
    },

    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },

    avatarText: {
      fontSize: 32,
      fontWeight: '700',
      color: theme.white,
    },

    fullName: {
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 4,
    },

    email: {
      fontSize: 14,
    },

    editButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 8,
      marginBottom: 16,
      elevation: 2,
    },

    editButtonText: {
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 8,
    },

    infoCard: {
      borderRadius: 12,
      padding: 20,
      elevation: 3,
    },

    fieldContainer: {
      marginBottom: 20,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.1)',
    },

    fieldHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },

    fieldLabel: {
      fontSize: 14,
      fontWeight: '600',
      marginLeft: 8,
    },

    fieldValue: {
      fontSize: 16,
      marginTop: 4,
      fontWeight: '500',
    },

    input: {
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      marginTop: 8,
      fontSize: 16,
    },

    multilineInput: {
      minHeight: 120,
      textAlignVertical: 'top',
      paddingTop: 12,
    },
  });
