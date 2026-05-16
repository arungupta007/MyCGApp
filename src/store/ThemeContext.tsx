import React, { createContext, useEffect, useState, ReactNode } from 'react';

import { darkTheme } from '../theme/darkTheme';
import { lightTheme } from '../theme/lightTheme';

import {
  STORAGE_KEYS,
  getStorageItem,
  setStorageItem,
} from '../services/storage';

type ThemeContextType = {
  theme: typeof lightTheme;
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    const savedTheme = await getStorageItem(STORAGE_KEYS.THEME);

    setIsDark(savedTheme === 'dark');
  };

  const toggleTheme = async () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    await setStorageItem(STORAGE_KEYS.THEME, newTheme ? 'dark' : 'light');
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
