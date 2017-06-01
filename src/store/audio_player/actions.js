export const LOAD_FILE = 'LOAD_FILE';
export const LOAD_FILE_START = 'LOAD_FILE_START';
export const TOGGLE_VIEW = 'TOGGLE_VIEW';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const STOP = 'STOP';


export const loadFile = (file, title) => {
  return {
    type: LOAD_FILE,
    file,
    title,
    playStatus: "PLAYING"
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

export const play = () => {
  return {
    type: PLAY,
    playStatus: "PLAYING"
  }
}

export const pause = () => {
  return {
    type: PAUSE,
    playStatus: "PAUSED"
  }
}
export const stop = () => {
  return {
    type: STOP,
    playStatus: "STOPPED"
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
