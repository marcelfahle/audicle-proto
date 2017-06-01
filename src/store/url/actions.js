import { createPost } from './../posts/actions';
import { push } from 'connected-react-router'
import sanitizeHtml from 'sanitize-html';

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

    //console.log("url", url);
    //console.log("stringified url", JSON.stringify({url}));
		
    req.open('GET', `https://mercury.postlight.com/parser?url=${url}`)
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader('x-api-key', 'dPw82v8B2eWbKnFdPqQXcfL3sDOnDZaNkQAdqqF0');

    //req.open('POST', 'https://flqltqk8r4.execute-api.eu-west-1.amazonaws.com/dev/parseurl');
    //req.setRequestHeader('Content-Type', 'application/json');
    req.onload = (e) => {


      const result =  JSON.parse( e.target.response );

      const cleanContent = sanitizeHtml(
        result.content, 
        { 
          allowedTags: [ 'b', 'p'] ,
          nonTextTags: [ 'style', 'script', 'textarea', 'noscript', 'figcaption', 'figure' ]
        }
      ).substring(0, 1400);
      const title = `<s>${result.title}.</s>`;
      const close = cleanContent.substr(cleanContent.length - 4) === '</p>' ? '' : '</p>';
      const author = result.author ? `<s>by ${result.author}</s>` : '';
      const ssml = `<speak>${title}${author}${cleanContent}${close}</speak>`
      console.log("ssml", ssml);
      // TODO: check for errors


      dispatch( parseURLSuccess(result) );
      dispatch( push('/') );

      // don't create post. send to Polly first. :-)
      //dispatch( convertPostToAudio(result) );
      result.ssml = ssml;
      result.status = 'generating'
      dispatch( createPost(result) );
    }
    req.send();
  }
}


