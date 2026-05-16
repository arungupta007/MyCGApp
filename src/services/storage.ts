import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
  TOKEN: 'TOKEN',
  THEME: 'THEME',
};

export const setStorageItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const getStorageItem = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const removeStorageItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
