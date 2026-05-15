// import messaging from '@react-native-firebase/messaging';

// import PushNotification from 'react-native-push-notification';

// class NotificationService {
//   async requestPermission() {
//     const authStatus = await messaging().requestPermission();

//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       console.log('Permission granted');
//     }
//   }

//   async getFCMToken() {
//     const token = await messaging().getToken();

//     console.log('FCM TOKEN =>', token);

//     return token;
//   }

//   configureLocalNotification() {
//     PushNotification.createChannel(
//       {
//         channelId: 'default-channel-id',

//         channelName: 'Default Channel',
//       },
//       created => console.log(`Channel created: ${created}`),
//     );
//   }

//   showLocalNotification(title: string, message: string) {
//     PushNotification.localNotification({
//       channelId: 'default-channel-id',

//       title,

//       message,
//     });
//   }
// }

// export default new NotificationService();
/////new////
import notifee, { AndroidImportance } from '@notifee/react-native';

class NotificationService {
  async requestPermission() {
    await notifee.requestPermission();
  }

  async displayNotification(title: string, body: string) {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
      title,
      body,

      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  }
}

export default new NotificationService();
