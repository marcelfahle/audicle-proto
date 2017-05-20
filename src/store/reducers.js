import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { user } from './user/reducer';
import { url } from './url/reducer';
import { posts } from './posts/reducer';
import { audioPlayer } from './audio_player/reducer';

const rootReducer = combineReducers({
  user,
  url,
  posts,
  audioPlayer,
  burgerMenu,
  form: formReducer
});
export default rootReducer;

