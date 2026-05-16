import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
};

type AuthState = {
  user: UserData | null;
};

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    },

    logoutUser: state => {
      state.user = null;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
