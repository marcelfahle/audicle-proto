import { 
  LOAD_FILE,
  TOGGLE_VIEW
} from './actions';

const initialState = {
  currentFile: null,
  currentTitle: null,
  maximized: true
}

export const audioPlayer = (state = initialState, action = {}) => {
  switch(action.type) {
    case LOAD_FILE :
      return { ...state, currentFile: action.file, currentTitle: action.title}
    case TOGGLE_VIEW :
      return { ...state, maximized: !state.maximized }
    default:
      return state;
  }
}
