import firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
}

firebase.initializeApp(config)

export const ref = firebase.database().ref();
export const database = firebase.database();
export const firebaseAuth = firebase.auth;
