// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { DrawerActions, useNavigation } from '@react-navigation/native';
// import { useTheme } from '../../hooks/useTheme';

// type Props = {
//   title: string;
// };

// const Header = ({ title }: Props) => {
//   const navigation = useNavigation();
//   const { theme } = useTheme();

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//       >
//         <Ionicons name="menu" size={30} color={theme.text} />
//       </TouchableOpacity>

//       <Text
//         style={[
//           styles.title,
//           {
//             color: theme.text,
//           },
//         ]}
//       >
//         {title}
//       </Text>

//       <TouchableOpacity onPress={() => {}}>
//         <Ionicons name="notifications-outline" size={26} color={theme.text} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Header;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   title: {
//     fontSize: 20,
//     fontWeight: '700',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   headerTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//   },
// });
///////new ////
import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useTheme } from '../../hooks/useTheme';
import NotificationModal from '../modals/NotificationModal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addNotification } from '../../redux/slices/notificationSlice';
=======

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import { useTheme } from '../../hooks/useTheme';

import NotificationModal from '../modals/NotificationModal';
>>>>>>> 1d4a312 (initial commit)

type Props = {
  title: string;

  showMenu?: boolean;

  showNotification?: boolean;

  showBackButton?: boolean;
};

const Header = ({
  title,
  showMenu = false,
  showNotification = false,
  showBackButton = false,
}: Props) => {
  const navigation = useNavigation<any>();
<<<<<<< HEAD
  const dispatch = useAppDispatch();
=======
>>>>>>> 1d4a312 (initial commit)

  const { theme } = useTheme();

  const [notificationVisible, setNotificationVisible] = useState(false);
<<<<<<< HEAD
  const handleNotificationPress = () => {
    dispatch(
      addNotification({
        id: Date.now().toString(),

        title: 'New Property Added',

        message: '2 new premium properties available.',

        time: 'Just now',

        read: false,
      }),
    );

    setNotificationVisible(true);
  };

  const notifications = useAppSelector(
    state => state.notification.notifications,
  );

  const unreadCount = notifications.filter(item => !item.read).length;
  console.log('Unread Notifications:', unreadCount);
=======
>>>>>>> 1d4a312 (initial commit)

  return (
    <>
      <View style={styles.container}>
        {/* Left Side */}

        <View style={styles.leftContainer}>
          {showMenu && (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Ionicons name="menu" size={30} color={theme.text} />
            </TouchableOpacity>
          )}

          {showBackButton && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color={theme.text} />
            </TouchableOpacity>
          )}
        </View>

        {/* Title */}

        <Text
          style={[
            styles.title,
            {
              color: theme.text,
            },
          ]}
        >
          {title}
        </Text>

        {/* Right Side */}

        <View style={styles.rightContainer}>
          {showNotification ? (
<<<<<<< HEAD
            <TouchableOpacity onPress={handleNotificationPress}>
              {/* <Ionicons
                name="notifications-outline"
                size={26}
                color={theme.text}
              /> */}
              <View>
                <Ionicons
                  name="notifications-outline"
                  size={26}
                  color={theme.text}
                />

                {unreadCount > 0 && (
                  <View style={styles.counterbadge}>
                    <Text style={styles.countPosition}>{unreadCount}</Text>
                  </View>
                )}
              </View>
=======
            <TouchableOpacity onPress={() => setNotificationVisible(true)}>
              <Ionicons
                name="notifications-outline"
                size={26}
                color={theme.text}
              />
>>>>>>> 1d4a312 (initial commit)
            </TouchableOpacity>
          ) : (
            <View style={{ width: 26 }} />
          )}
        </View>
      </View>

      {/* Notification Modal */}

      <NotificationModal
        visible={notificationVisible}
        onClose={() => setNotificationVisible(false)}
      />
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingHorizontal: 20,

    paddingTop: 10,

    paddingBottom: 20,
  },

  leftContainer: {
    width: 40,
  },

  rightContainer: {
    width: 40,

    alignItems: 'flex-end',
  },

  title: {
    fontSize: 22,

    fontWeight: '700',
  },
<<<<<<< HEAD
  counterbadge: {
    position: 'absolute',
    right: -4,
    top: -4,
    backgroundColor: 'red',
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countPosition: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
=======
>>>>>>> 1d4a312 (initial commit)
});
