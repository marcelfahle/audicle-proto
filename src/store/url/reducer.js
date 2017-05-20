import {
  SUBMIT_URL,
  CHECK_URL,
  PARSE_URL_START,
  PARSE_URL_SUCCESS,
  PARSE_URL_ERROR
} from './actions';

export const url = (state = {
  url: '',
  progress: false
}, action) => {
  switch (action.type) {
    case SUBMIT_URL:
      console.log('submit url', action.url);
      return state;

    case CHECK_URL:
      console.log('checkURL', action.url);
      return state;

    case PARSE_URL_START:
      return { ...state, progress: true };

    case PARSE_URL_SUCCESS:
      console.log('reducer PARSE_URL_SUCCESS', action); 
      return { ...state, progress: false };

    case PARSE_URL_ERROR:
      console.log('reducer PARSE_URL_ERROR'); 
      return state;

    default: 
      return state;
  }
}
