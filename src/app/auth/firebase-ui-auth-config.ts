import {AuthMethods, AuthProvider, FirebaseUIAuthConfig} from 'firebaseui-angular';

export const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [AuthProvider.Google],
  method: AuthMethods.Popup,
  tos: '<your-tos-link>'
};
