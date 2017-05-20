import Immutable from 'seamless-immutable';
import {
  GET_POSTS_BY_USER_REQUESTED,
  GET_POSTS_BY_USER_SUCCESS,
  GET_POSTS_BY_USER_FAILURE,
  ADD_POST
} from './actions';

const initialState = Immutable({
  postsList: { posts: null, error: null, loading: false },
  newPost:{post:null, error: null, loading: false}, 
  activePost:{post:null, error:null, loading: false}, 
  deletedPost: {post: null, error:null, loading: false},
})

export const posts = ( state = initialState, action = {} ) => {
  switch( action.type ) {
    case GET_POSTS_BY_USER_REQUESTED:
      return { ...state, postsList: {posts: [], error: null, loading: true} };

    case GET_POSTS_BY_USER_SUCCESS:
      return { ...state, postsList: {posts: action.posts, error: null, loading: false} };

    case GET_POSTS_BY_USER_FAILURE:
      return state;

    case ADD_POST:
      console.log('add post', action.post);
      return state; 

    default:
      return state;
  }
};




