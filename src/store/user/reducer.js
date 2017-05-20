import { 
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from './actions';

export const user = (state = {
  authenticated: false,
  isAuthenticating: false,
  user: {},
  error: {}
}, action) => {
  //console.log('REDUCER: ', action.type)
  switch( action.type ) {
    case LOGIN_USER_SUCCESS:
      return Object.assign( {}, state, {
        isAuthenticating: false,
        authenticated: true,
        user: action.user
      });
    case LOGIN_USER_FAILURE:
      return Object.assign( {}, state, {
        isAuthenticating: false,
        authenticated: false,
        user: {},
        error: action.error
      });
    case LOGOUT_USER_SUCCESS:
      return Object.assign( {}, state, {
        isAuthenticating: false,
        authenticated: false,
        user: {},
      });
    case LOGOUT_USER_FAILURE:
    default:
      return state
  }
}
