// import React from 'react';

// import {
//   Modal,
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';

// import Ionicons from 'react-native-vector-icons/Ionicons';

// import { useTheme } from '../../hooks/useTheme';

// import { notificationData } from '../../data/notificationData';

// type Props = {
//   visible: boolean;

//   onClose: () => void;
// };

// const NotificationModal = ({ visible, onClose }: Props) => {
//   const { theme } = useTheme();

//   return (
//     <Modal visible={visible} animationType="slide" transparent>
//       <View style={styles.overlay}>
//         <View
//           style={[
//             styles.modalContainer,
//             {
//               backgroundColor: theme.background,
//             },
//           ]}
//         >
//           {/* Header */}

//           <View style={styles.header}>
//             <Text
//               style={[
//                 styles.title,
//                 {
//                   color: theme.text,
//                 },
//               ]}
//             >
//               Notifications
//             </Text>

//             <TouchableOpacity onPress={onClose}>
//               <Ionicons name="close" size={28} color={theme.text} />
//             </TouchableOpacity>
//           </View>

//           {/* Notification List */}

//           <FlatList
//             data={notificationData}
//             keyExtractor={item => item.id}
//             showsVerticalScrollIndicator={false}
//             renderItem={({ item }) => (
//               <View
//                 style={[
//                   styles.notificationCard,
//                   {
//                     backgroundColor: theme.card,
//                   },
//                 ]}
//               >
//                 <View style={styles.row}>
//                   <Ionicons name="notifications" size={24} color="#4A90E2" />

//                   <View style={styles.content}>
//                     <Text
//                       style={[
//                         styles.notificationTitle,
//                         {
//                           color: theme.text,
//                         },
//                       ]}
//                     >
//                       {item.title}
//                     </Text>

//                     <Text
//                       style={[
//                         styles.message,
//                         {
//                           color: theme.text,
//                         },
//                       ]}
//                     >
//                       {item.message}
//                     </Text>

//                     <Text style={styles.time}>{item.time}</Text>
//                   </View>
//                 </View>
//               </View>
//             )}
//           />
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default NotificationModal;

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,

//     backgroundColor: 'rgba(0,0,0,0.5)',

//     justifyContent: 'flex-end',
//   },

//   modalContainer: {
//     height: '75%',

//     borderTopLeftRadius: 24,

//     borderTopRightRadius: 24,

//     padding: 20,
//   },

//   header: {
//     flexDirection: 'row',

//     justifyContent: 'space-between',

//     alignItems: 'center',

//     marginBottom: 20,
//   },

//   title: {
//     fontSize: 24,

//     fontWeight: '700',
//   },

//   notificationCard: {
//     borderRadius: 18,

//     padding: 16,

//     marginBottom: 16,

//     elevation: 3,
//   },

//   row: {
//     flexDirection: 'row',
//   },

//   content: {
//     marginLeft: 14,

//     flex: 1,
//   },

//   notificationTitle: {
//     fontSize: 16,

//     fontWeight: '700',
//   },

//   message: {
//     marginTop: 6,

//     lineHeight: 20,
//   },

//   time: {
//     marginTop: 10,

//     color: '#4A90E2',

//     fontWeight: '600',
//   },
// });
////////new///
import React, { useEffect, useRef } from 'react';

import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '../../hooks/useTheme';

import { notificationData } from '../../data/notificationData';

type Props = {
  visible: boolean;

  onClose: () => void;
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const NotificationModal = ({ visible, onClose }: Props) => {
  const { theme } = useTheme();

  const slideAnim = useRef(new Animated.Value(SCREEN_WIDTH)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,

        duration: 300,

        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: SCREEN_WIDTH,

        duration: 300,

        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        {/* Background Overlay */}

        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />

        {/* Right Side Panel */}

        <Animated.View
          style={[
            styles.modalContainer,
            {
              backgroundColor: theme.background,

              transform: [
                {
                  translateX: slideAnim,
                },
              ],
            },
          ]}
        >
          {/* Header */}

          <View style={styles.header}>
            <Text
              style={[
                styles.title,
                {
                  color: theme.text,
                },
              ]}
            >
              Notifications
            </Text>

            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={28} color={theme.text} />
            </TouchableOpacity>
          </View>

          {/* Notification List */}

          <FlatList
            data={notificationData}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.notificationCard,
                  {
                    backgroundColor: theme.card,
                  },
                ]}
              >
                <View style={styles.row}>
                  <Ionicons name="notifications" size={24} color="#4A90E2" />

                  <View style={styles.content}>
                    <Text
                      style={[
                        styles.notificationTitle,
                        {
                          color: theme.text,
                        },
                      ]}
                    >
                      {item.title}
                    </Text>

                    <Text
                      style={[
                        styles.message,
                        {
                          color: theme.text,
                        },
                      ]}
                    >
                      {item.message}
                    </Text>

                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

export default NotificationModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    zIndex: 9999,
    elevation: 9999,
  },
  backdrop: {
    flex: 1,

    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    width: '95%',
    height: '100%',
    padding: 20,
    elevation: 10,
  },

  header: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

    marginTop: 20,
  },

  title: {
    fontSize: 24,

    fontWeight: '700',
  },

  notificationCard: {
    borderRadius: 18,

    padding: 16,

    marginBottom: 16,

    elevation: 3,
  },

  row: {
    flexDirection: 'row',
  },

  content: {
    marginLeft: 14,

    flex: 1,
  },

  notificationTitle: {
    fontSize: 16,

    fontWeight: '700',
  },

  message: {
    marginTop: 6,

    lineHeight: 20,
  },

  time: {
    marginTop: 10,

    color: '#4A90E2',

    fontWeight: '600',
  },
});
