export const LOAD_FILE = 'LOAD_FILE';
export const LOAD_FILE_START = 'LOAD_FILE_START';
export const TOGGLE_VIEW = 'TOGGLE_VIEW';


export const loadFile = (file, title) => {
  return {
    type: LOAD_FILE,
    file,
    title
  }
}
export const loadFileStart = (file, title) => {
  return (dispatch, getState) => {
    dispatch( loadFile(file, title) );
  }
}
export const toggleView = () => {
  return {
    type: TOGGLE_VIEW
  }
}



/*
 *  What we want:
 *  - store the last/current file a user played. When user opens the app,
 *  it'll be loaded but paused. User can continue anytime
 *  - store the playing progress of each file with each file
 *  - highlight the currently loaded post in the list
 *  - show progress on each file, mark files that have been played to the end
 *
 *  Steps:
 *  1. store latest/currently loaded post in user model.
 *
 */
