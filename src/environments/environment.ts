// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Config de firebase
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDQqSjEaHPqBVblxnt5c4l3iLQwYPGDeLM",
    authDomain: "todoapp-6b668.firebaseapp.com",
    projectId: "todoapp-6b668",
    storageBucket: "todoapp-6b668.appspot.com",
    messagingSenderId: "499454544496",
    appId: "1:499454544496:web:ad92f4729e925d769602b5",
    measurementId: "G-5B9KJW4L8E"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
