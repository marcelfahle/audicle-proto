import { 
  LOAD_FILE,
  TOGGLE_VIEW,
  PLAY,
  PAUSE,
  STOP
} from './actions';

const initialState = {
  currentFile: null,
  currentTitle: null,
  maximized: true,
  playStatus: "STOPPED"
}

export const audioPlayer = (state = initialState, action = {}) => {
  switch(action.type) {
    case LOAD_FILE :
      return { ...state, currentFile: action.file, currentTitle: action.title, playStatus: action.playStatus}
    case TOGGLE_VIEW :
      return { ...state, maximized: !state.maximized }
    case PLAY :
      return { ...state, playStatus: "PLAYING" }
    case PAUSE :
      return { ...state, playStatus: "PAUSED" }
    case STOP :
      return { ...state, playStatus: "STOPPED" }
    default:
      return state;
  }
}
