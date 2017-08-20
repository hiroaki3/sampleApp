// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/* 
export const environment = {
  production: false
};
 */

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBMAzBIy1_e99D9Jjlz_QotHV7F4qRbkEA",
    authDomain: "sampleapps-83a21.firebaseapp.com",
    databaseURL: "https://sampleapps-83a21.firebaseio.com",
    projectId: "sampleapps-83a21",
    storageBucket: "sampleapps-83a21.appspot.com",
    messagingSenderId: "965952078391"
  }
};