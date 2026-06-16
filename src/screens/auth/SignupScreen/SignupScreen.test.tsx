import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignupScreen from './SignupScreen';

// Navigation Mock
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

// Theme Mock
jest.mock('../../../hooks/useTheme', () => ({
  useTheme: () => ({
    theme: {
      background: '#fff',
      text: '#000',
      primary: '#4A90E2',
      card: '#f5f5f5',
    },
  }),
}));

// Redux Mock
const mockDispatch = jest.fn();

jest.mock('../../../redux/hooks', () => ({
  useAppDispatch: () => mockDispatch,
}));

// Realm Mock
jest.mock('../../../database/services/userService', () => ({
  createUser: jest.fn(),
}));

// Toast Mock
jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}));

// Vector Icons Mock
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');

describe('Signup Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all required fields', async () => {
    const { getByTestId } = await render(<SignupScreen />);

    expect(getByTestId('firstname-input')).toBeTruthy();
    expect(getByTestId('lastname-input')).toBeTruthy();
    expect(getByTestId('email-input')).toBeTruthy();
    expect(getByTestId('password-input')).toBeTruthy();
    expect(getByTestId('confirm-password-input')).toBeTruthy();
    expect(getByTestId('signup-button')).toBeTruthy();
  });

  it('allows user to enter data', async () => {
    const { getByTestId } = await render(<SignupScreen />);

    fireEvent.changeText(getByTestId('firstname-input'), 'Arun');

    fireEvent.changeText(getByTestId('lastname-input'), 'Gupta');

    fireEvent.changeText(getByTestId('email-input'), 'arun@test.com');

    fireEvent.changeText(getByTestId('password-input'), '123456');

    fireEvent.changeText(getByTestId('confirm-password-input'), '123456');

    expect(getByTestId('firstname-input').props.value).toBe('Arun');

    expect(getByTestId('lastname-input').props.value).toBe('Gupta');
  });

  it('shows validation errors on empty submit', async () => {
    const { getByTestId, findByText } = await render(<SignupScreen />);

    fireEvent.press(getByTestId('signup-button'));

    expect(await findByText('First name is required')).toBeTruthy();

    expect(await findByText('Last name is required')).toBeTruthy();

    expect(await findByText('Email is required')).toBeTruthy();
  });

  it('shows password mismatch validation', async () => {
    const { getByTestId, findByText } = await render(<SignupScreen />);

    fireEvent.changeText(getByTestId('password-input'), '123456');

    fireEvent.changeText(getByTestId('confirm-password-input'), '111111');

    fireEvent.press(getByTestId('signup-button'));

    expect(await findByText('Passwords do not match')).toBeTruthy();
  });
  it('fills and submits signup form', async () => {
    const { getByTestId } = await render(<SignupScreen />);

    fireEvent.changeText(getByTestId('firstname-input'), 'Arun');

    fireEvent.changeText(getByTestId('lastname-input'), 'Gupta');

    fireEvent.changeText(getByTestId('email-input'), 'arun@test.com');

    fireEvent.changeText(getByTestId('phone-input'), '9876543210');

    fireEvent.changeText(getByTestId('address-input'), 'Hyderabad India');

    fireEvent.changeText(getByTestId('password-input'), '123456');

    fireEvent.changeText(getByTestId('confirm-password-input'), '123456');

    fireEvent.press(getByTestId('terms-checkbox'));

    fireEvent.press(getByTestId('signup-button'));
  });
});
