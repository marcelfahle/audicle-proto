import { createPost } from './../posts/actions';
import { push } from 'connected-react-router'

export const SUBMIT_URL = 'SUBMIT_URL';
export const CHECK_URL = 'TEST_URL';
export const PARSE_URL = 'PARSE_URL';
export const PARSE_URL_START = 'PARSE_URL_START';
export const PARSE_URL_SUCCESS = 'PARSE_URL_SUCCESS';
export const PARSE_URL_ERROR = 'PARSE_URL_ERROR';



export const submitURL = ( url ) => {
  return {
    type: SUBMIT_URL,
    url 
  }
}
export const checkURL = ( url ) => {
  return {
    type: CHECK_URL,
    url
  }
}

export const parseURLStart = () => {
  return { type: PARSE_URL_START };
}

export const parseURLSuccess = ( post ) => {
  return { type: PARSE_URL_SUCCESS, post };
}

export const parseURLError = () => {
  return { type: PARSE_URL_ERROR };
}

export const parseURL = ( url ) => {
  return (dispatch) => {
    dispatch( parseURLStart() );

    const req = new XMLHttpRequest();
    req.open('POST', 'https://flqltqk8r4.execute-api.eu-west-1.amazonaws.com/dev/parseurl');
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload = (e) => {
      const result =  JSON.parse( e.target.response );
      // TODO: check for errors
      dispatch( parseURLSuccess(result) );

      console.log("routing");
      dispatch( push('/') );

      // don't create post. send to Polly first. :-)
      //dispatch( convertPostToAudio(result) );
      result['status'] = 'generating'
      console.log('Parsing done. result', result);
      dispatch( createPost(result) );
    }
    req.send(JSON.stringify({url}));
  }
}


