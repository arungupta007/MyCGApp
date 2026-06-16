import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ForgotPasswordScreen from './ForgotPasswordScreen';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
}));

jest.mock('../../../hooks/useTheme', () => ({
  useTheme: () => ({
    theme: {
      text: '#000',
      background: '#fff',
      primary: '#4A90E2',
      card: '#fff',
    },
  }),
}));

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}));

describe('ForgotPasswordScreen', () => {
  it('renders password fields', async () => {
    const { getByTestId } = await render(<ForgotPasswordScreen />);

    expect(getByTestId('password-input')).toBeTruthy();

    expect(getByTestId('confirm-password-input')).toBeTruthy();

    expect(getByTestId('submit-button')).toBeTruthy();
  });

  it('fills password form', async () => {
    const { getByTestId } = await render(<ForgotPasswordScreen />);

    fireEvent.changeText(getByTestId('password-input'), '123456');

    fireEvent.changeText(getByTestId('confirm-password-input'), '123456');

    expect(getByTestId('password-input').props.value).toBe('123456');

    expect(getByTestId('confirm-password-input').props.value).toBe('123456');
  });

  it('submits form', async () => {
    const { getByTestId } = await render(<ForgotPasswordScreen />);

    fireEvent.changeText(getByTestId('password-input'), '123456');

    fireEvent.changeText(getByTestId('confirm-password-input'), '123456');

    fireEvent.press(getByTestId('submit-button'));
  });
});
