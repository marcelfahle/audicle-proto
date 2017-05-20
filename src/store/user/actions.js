import firebase from 'firebase';
import { ref, firebaseAuth } from './../../config/firebaseConfig';

const facebook = new firebase.auth.FacebookAuthProvider();
facebook.addScope('public_profile');


export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';



  /*
export const loginUser = () => {
  return {
    type: LOGIN_USER
  }
}
*/
export const loginUserSuccess = ( user ) => {
  return {
    type: LOGIN_USER_SUCCESS,
    user
  }
}
export const loginUserFailure = ( error ) => {
  return {
    type: LOGIN_USER_FAILURE,
    error
  } 
}
export const loginUser =  ( ) => {
  return (dispatch) => {
    firebaseAuth().signInWithPopup( facebook )
    .then( (result) => {
      const token = result.credential.accessToken;
      const user = {
        email: result.user.email,
        uid: result.user.uid,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        token
      };

      // write user to DB
      ref.child(`users/${user.uid}/info`).set( user )
        .then( () => {
          // dispatch user login success
          dispatch( loginUserSuccess( user ) ); 
        })
        .catch( (error) => {
          // dispatch  save user to DB failure
          console.log('failure', error);
          dispatch(loginUserFailure( error ));
        });
    }).catch( (error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log('Error', errorCode, errorMessage, email, credential);
      // dispatch user login failure
      dispatch(loginUserFailure(errorMessage));
    });
  }
}


export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS
  }
}
export const logoutUserFailure = (error) => {
  return {
    type: LOGOUT_USER_FAILURE,
    error
  }
}
export const logoutUser = ( ) => {
  //console.log('dispatch?', dispatch);
  return (dispatch, getState) => {
    firebaseAuth().signOut()
    .then( () => {
      dispatch( logoutUserSuccess() );
    }).catch( (error) => {
      dispatch( logoutUserFailure( error ) );
    });
  }
}
