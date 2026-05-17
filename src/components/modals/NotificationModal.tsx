import React, { useEffect, useRef } from 'react';

import {
  Modal,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useStyles } from './styles';
import { useTheme } from '../../hooks/useTheme';

import { notificationData } from '../../data/notificationData';
// import { useAppSelector } from '../../redux/hooks';

type Props = {
  visible: boolean;

  onClose: () => void;
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const NotificationModal = ({ visible, onClose }: Props) => {
  const { theme } = useTheme();
  const styles = useStyles();
  // const notifications = useAppSelector(
  //   state => state.notification.notifications,
  // );

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
            // eslint-disable-next-line react/no-unstable-nested-components
            ListEmptyComponent={() => (
              <View style={styles.emptyContainer}>
                <Ionicons
                  name="notifications-off-outline"
                  size={70}
                  color="gray"
                />

                <Text style={styles.noNotificationsText}>No Notifications</Text>
              </View>
            )}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

export default NotificationModal;
