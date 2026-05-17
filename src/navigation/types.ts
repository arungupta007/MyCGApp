import { PropertyItem } from '../types/property';
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

export type BottomTabParamList = {
  Home: undefined;

  Appointments: undefined;

  Profile: undefined;

  PropertyDetails: {
    property: PropertyItem;
  };
};

export type DrawerParamList = {
  Tabs: undefined;
};

export type AppStackParamList = {
  MainApp: undefined;

  PropertyDetails: {
    property: PropertyItem;
  };
  AppointmentForm: {
    propertyId: string;
  };
};
