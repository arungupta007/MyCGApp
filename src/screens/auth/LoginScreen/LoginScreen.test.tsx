import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import LoginScreen from './LoginScreen';

describe('Login Screen', () => {
  it('renders correctly', async () => {
    const { getByText } = await render(<LoginScreen />);

    expect(getByText('Login')).toBeTruthy();
  });

  it('updates email field', async () => {
    const { getByTestId } = await render(<LoginScreen />);

    const emailInput = getByTestId('email-input');

    fireEvent.changeText(emailInput, 'arun@test.com');

    expect(emailInput.props.value).toBe('arun@test.com');
  });

  it('updates password field', async () => {
    const { getByTestId } = await render(<LoginScreen />);

    const passwordInput = getByTestId('password-input');

    fireEvent.changeText(passwordInput, '123456');

    expect(passwordInput.props.value).toBe('123456');
  });
});
