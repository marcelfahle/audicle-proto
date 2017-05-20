import React from 'react';
//import { connect } from 'react-redux';
import { reduxForm, Field} from 'redux-form';
import InputField from './components/InputField';
import styled from 'styled-components';
import Spinner from 'react-spinkit';

import './PostForm.css';


const StatusWrapper = styled.div`
  height: 80px;
  margin: 30px auto;
  max-width: 600px;
  text-align: center;
  .spinner {
    margin: 20px auto;
  }
`;


const validate = ( values ) => {
  // TODO: Do a regex here!
  // eslint-disable-next-line
  const urlRegEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-]*)?\??(?:[\-\+=&;%@\.\w]*)#?(?:[\.\!\/\\\w]*))?)/g;
  if (values && values.url) {
    console.log('validate', values.url.match(urlRegEx));
  }
}


class PostForm extends React.Component {
  render() {
    const { handleSubmit, progress } = this.props;

    if (progress) {
      return <StatusWrapper><Spinner /><br/><p>Working. Please sit tight...</p></StatusWrapper>
    }
    return (
        <form onSubmit={ handleSubmit }> 
          <div className="post-form pt-card pt-interactive pt-elevation-2">
            <Field 
              component={InputField}
              name="url"
            />
          </div>
        </form>
    );
  }
};  



PostForm = reduxForm({
  form: 'urlform',
  validate
})(PostForm);

export default PostForm;
