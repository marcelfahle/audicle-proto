import React from 'react';
//import { connect } from 'react-redux';
import { reduxForm, Field} from 'redux-form';
import styled from 'styled-components';
import Spinner from 'react-spinkit';

import './PostForm.css';


const FormWrapper = styled.div`
  padding-top: 20%;
`

const StatusWrapper = styled.div`
  height: 80px;
  margin: 30px auto;
  max-width: 600px;
  text-align: center;
  .spinner {
    margin: 20px auto;
  }
`;

const InputField = styled.input`
  border: none;
  border-bottom: 1px solid #aaa;
  font-size: 18px;
  padding: 6px;
  display: block;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10%;
`

const SubmitButton = styled.button`
  color: #fff;
  padding: 20px 40px;
  border:0 none;
  border-radius: 40px;
  background-color: #1C56FF;
  font-size: 24px;
  font-weight: 400;
`


  /*
const validate = ( values ) => {
  // TODO: Do a regex here!
  // eslint-disable-next-line
  const urlRegEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-]*)?\??(?:[\-\+=&;%@\.\w]*)#?(?:[\.\!\/\\\w]*))?)/g;
  if (values && values.url) {
    console.log('validate', values.url.match(urlRegEx));
  }
}

*/

const renderInputField = ( field ) => (
  <div className="input-row">
    <InputField  {...field.input} placeholder="URL" type="text"/>
    {field.meta.touched && field.meta.error && 
       <span className="error">{field.meta.error}</span>}
  </div>
)

class PostForm extends React.Component {
  render() {
    const { handleSubmit, progress } = this.props;

    if (progress) {
      return <StatusWrapper><Spinner /><br/><p>Working. Please sit tight...</p></StatusWrapper>
    }
    return (
        <form onSubmit={ handleSubmit }> 
          <FormWrapper>

            <Field
              name="url" 
              component={renderInputField}
             />
            

            <SubmitButton type="submit" >Save to Playlist</SubmitButton>

          </FormWrapper>
        </form>
    );
  }
};  



export default reduxForm({
  form: 'urlform'
})(PostForm);

