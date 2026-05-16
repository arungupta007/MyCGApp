import React, { useContext } from 'react';

import { AuthContext } from '../store/AuthContext';

import AuthNavigator from './AuthNavigator';

import AppStackNavigator from './AppStackNavigator';

const RootNavigator = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <AppStackNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
