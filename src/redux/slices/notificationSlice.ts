import { createSlice } from '@reduxjs/toolkit';

export interface NotificationItem {
  id: string;

  title: string;

  message: string;

  time: string;

  read?: boolean;
}

interface NotificationState {
  notifications: NotificationItem[];
}

const initialState: NotificationState = {
  notifications: [
    {
      id: '1',

      title: 'Welcome',

      message: 'Welcome to MyCGApp.',

      time: '2 min ago',

      read: false,
    },
  ],
};

const notificationSlice = createSlice({
  name: 'notification',

  initialState,

  reducers: {
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
    },

    markAllAsRead: state => {
      state.notifications = state.notifications.map(item => ({
        ...item,
        read: true,
      }));
    },
  },
});

export const { addNotification, markAllAsRead } = notificationSlice.actions;

export default notificationSlice.reducer;
