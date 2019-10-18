import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD44wj-Y8RZDCEaz2LabRUwPIg2rZ5zEE4",
    authDomain: "reactapp-6debc.firebaseapp.com",
    databaseURL: "https://reactapp-6debc.firebaseio.com",
    projectId: "reactapp-6debc",
    storageBucket: "reactapp-6debc.appspot.com",
    messagingSenderId: "554302350152",
    appId: "1:554302350152:web:ff091dd5e0ac3c8b62897d"
  };

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();