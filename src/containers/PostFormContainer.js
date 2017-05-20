import { connect } from 'react-redux';
import { reset } from 'redux-form';

//import Sound from 'react-sound';
import validUrl from 'valid-url';

import PostForm from './../PostForm';

import { parseURL } from './../store/url/actions';


const validateURL = ( url ) => {
  if ( !validUrl.isWebUri( url ) )
    return false;

  return url;
}




const mapStateToProps = (state) => {
  return {
    progress: state.url.progress
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      if ( validateURL(values.url) ) {
        dispatch(reset('urlform'));
        dispatch(parseURL(values.url))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);


