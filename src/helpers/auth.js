import firebase from 'firebase';
import { ref, firebaseAuth } from './../config/firebaseConfig';

const facebook = new firebase.auth.FacebookAuthProvider();
facebook.addScope('public_profile');

export function auth () {
  firebaseAuth().signInWithPopup( facebook ).then( (result) => {
    const token = result.credential.accessToken;
    const user = result.user;
    console.log('LOGIN success', user, token);
    ref.child(`users/${user.uid}/info`).set({
      email: user.email, 
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL
    });
  }).catch( (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.log('Error', errorCode, errorMessage, email, credential);
  });
}

export function logout() {
  return firebaseAuth().signOut().then( () => {
    console.log('SIGNOUT success'); 
  }, (error) => {
    console.log('SIGNOUT ERROR');
  });
  // todo: add bert or something here
}
