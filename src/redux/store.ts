import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import notificationReducer from './slices/notificationSlice';
=======

>>>>>>> 1d4a312 (initial commit)
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
<<<<<<< HEAD
    notification: notificationReducer,
=======
>>>>>>> 1d4a312 (initial commit)
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
