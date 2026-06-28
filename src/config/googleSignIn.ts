import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const configureGoogleSignin = () => {
  GoogleSignin.configure({
    webClientId: 'AIzaSyBVcT9thKexcL8L2yzIEPC5RBZh23pZQck',
    offlineAccess: true,
  });
};
