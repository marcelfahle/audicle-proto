import firebase from 'firebase';
import { database } from './../../config/firebaseConfig';

export const GET_POSTS_BY_USER = 'GET_POSTS_BY_USER';
export const GET_POSTS_BY_USER_REQUESTED = 'GET_POSTS_BY_USER_REQUESTED';
export const GET_POSTS_BY_USER_SUCCESS = 'GET_POSTS_BY_USER_SUCCESS';
export const GET_POSTS_BY_USER_FAILURE = 'GET_POSTS_BY_USER_FAILURE';

export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_START = 'CREATE_POST_START';
export const CREATE_POST_END = 'CREATE_POST_END';

export const UPDATE_POST = 'UPDATE_POST';

export const ADD_POST = 'ADD_POST';

export const REMOVE_POST = 'REMOVE_POST';

export const CONVERT_POST_TO_AUDIO_START = 'CONVERT_POST_TO_AUDIO_START';
export const CONVERT_POST_TO_AUDIO_END = 'CONVERT_POST_TO_AUDIO_END';

export const GET_DURATION_START = 'GET_DURATION_START';
export const GET_DURATION_SUCCESS = 'GET_DURATION_SUCCESS';
export const GET_DURATION_FAILURE = 'GET_DURATION_FAILURE';


export const getPostsByUserRequested =  () => {
  return { type: GET_POSTS_BY_USER_REQUESTED }
}
export const getPostsByUserSuccess = ( posts ) => {
  return {
    type: GET_POSTS_BY_USER_SUCCESS,
    posts
  }
}
export const getPostsByUserFailure = ( error ) => {
  return {
    type: GET_POSTS_BY_USER_FAILURE,
    error
  }
}
export const getPostsByUser = ( userId ) => {
  return (dispatch) => {
    dispatch(getPostsByUserRequested());

    const ref = database.ref(`posts/${userId}`).orderByChild('createdAt');
    ref.on('value', (snapshot) => {
      dispatch(getPostsByUserSuccess(snapshot.val()));
    });
  }
}


export const removePost = (id) => {
  return (dispatch, getState) => { 
    const userId = getState().user.user.uid;
    const ref = database.ref(`posts/${userId}/${id}`);
    ref.remove();
  }
}






export const createPostStart = () => {
  return { type: CREATE_POST_START };
}
export const createPostEnd = () => {
  return { type: CREATE_POST_END };
}
export const createPost = ( post ) => {
  return (dispatch, getState) => {
    // TODO: wire that up properly, so we get all the 
    // goddies from redux devtools, and proper status msg
    dispatch(createPostStart());

    post['createdAt'] = firebase.database.ServerValue.TIMESTAMP;

    const userId = getState().user.user.uid;

    const ref = database.ref(`posts/${userId}`);
    const newPostKey = ref.push().key;
    var updates = {};
    updates[newPostKey] = post;
    console.log('all the updates', updates);
    ref.update(updates);
    const key = Object.keys(updates)[0];
    dispatch( convertPostToAudio( updates[key], key )  );
  }
}

export const updatePost = ( post, key ) => {
  console.log('updating post', post);
  return (dispatch, getState) => {
    const userId = getState().user.user.uid;
    //post['finished'] = false;
    //post['position'] = 0; // listening position
    database.ref(`posts/${userId}/${key}`).update({
      location: post.location,
      duration: post.duration,
      finished: false,
      started: false,
      position: 0,
      status: 'ready'
    })
    console.log('key', key);
  }
}
 //
/*
 *
 * 1. parse and get text from parse  Lambda
 * 2. create the post with file status 'working on it' and unable to click
 * 3. AFTER creating the post (because we need the ID) dispatch polly post
 * 4. after polly is done, add polly infos to post and change status.
 *
 *
 * possible status values
 * generating
 * error    (user should be able to try again) 
 * ready
 */






export const getDuration = ( file ) => {
  return (dispatch) => {
    
  }
}
export const getDurationStart = () => {
  return { type: GET_DURATION_START }
}
export const getDurationFailure = () => {
  return { type: GET_DURATION_FAILURE }
}
export const getDurationSUCESS = () => {
  return { type: GET_DURATION_SUCCESS }
}







export const convertPostToAudioStart = () => {
  return { type: CONVERT_POST_TO_AUDIO_START };
}
export const convertPostToAudioEnd = () => {
  return { type: CONVERT_POST_TO_AUDIO_END };
}
export const convertPostToAudio = ( post, key ) => {
  return (dispatch) => {
    dispatch( convertPostToAudioStart() ); 
    const req = new XMLHttpRequest();
    req.open('POST', 'https://flqltqk8r4.execute-api.eu-west-1.amazonaws.com/dev/convert');
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload = (e) => {
      // TODO: Catch Polly errors !!!!!
      const result = JSON.parse(e.target.response);
      console.log('got the polly', result);
      post['location'] = result.location;

      // TODO: got the audio, get the freaking duration
      const durReq = new XMLHttpRequest();
      durReq.open('GET', `https://flqltqk8r4.execute-api.eu-west-1.amazonaws.com/dev/duration?file=${result.location}`);
      durReq.onload = (e) => {
        // TODO: catch them API errors
        const res = JSON.parse(e.target.response);
        console.log('got duration', res.duration)

        post['duration'] = res.duration;
        //
        // this shlould be now update post.
        // dispatch( createPost(post) );
        console.log('got duration, updating');
        dispatch( updatePost(post, key) );
      }
      console.log('start get duration');
      durReq.send();
    }
    console.log('lets go', post);
    req.send(JSON.stringify( {text: post.ssml }  ));
  }
}



