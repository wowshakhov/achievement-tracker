// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBjLiWdAj5ABiK9djPTKKohJiELQuV_MmA',
    authDomain: 'achievement-tracker-2aad7.firebaseapp.com',
    databaseURL: 'https://achievement-tracker-2aad7.firebaseio.com',
    projectId: 'achievement-tracker-2aad7',
    storageBucket: 'achievement-tracker-2aad7.appspot.com',
    messagingSenderId: '1075224551062'
  }
};
