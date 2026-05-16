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

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import { useTheme } from '../../hooks/useTheme';

import NotificationModal from '../modals/NotificationModal';

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

  const { theme } = useTheme();

  const [notificationVisible, setNotificationVisible] = useState(false);

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
            <TouchableOpacity onPress={() => setNotificationVisible(true)}>
              <Ionicons
                name="notifications-outline"
                size={26}
                color={theme.text}
              />
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
});
