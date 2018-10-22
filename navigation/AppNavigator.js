import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import RegistrationNavigator from './RegistrationNavigator';
import MainTabNavigator from './MainTabNavigator';

import WelcomeScreen from '../screens/WelcomeScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ResetPasswordSentScreen from '../screens/ResetPasswordSentScreen';
import PasswordScreen from '../screens/PasswordScreen';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Registration: RegistrationNavigator,
  ResetPassword: { screen: ResetPasswordScreen },
  ResetPasswordSent: { screen: ResetPasswordSentScreen },
  Password: { screen: PasswordScreen },
  Welcome: { screen: WelcomeScreen },
  Main: MainTabNavigator,
  },
  {
    initialRouteName: 'Registration',
  },
  {
    navigationOptions: {
      header: null,
  },
});
