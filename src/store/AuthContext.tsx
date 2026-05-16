import React, { createContext, useEffect, useState, ReactNode } from 'react';

import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
  STORAGE_KEYS,
} from '../services/storage';

type AuthContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await getStorageItem(STORAGE_KEYS.TOKEN);

    setIsLoggedIn(!!token);
  };

  const login = async () => {
    await setStorageItem(STORAGE_KEYS.TOKEN, 'dummy_token');

    setIsLoggedIn(true);
  };

  const logout = async () => {
    await removeStorageItem(STORAGE_KEYS.TOKEN);

    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
