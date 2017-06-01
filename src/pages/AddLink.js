import React from 'react';
import styled from 'styled-components';



import Header from './../components/Header';
import BackButton from './../components/BackButton';
import PostFormContainer from './../containers/PostFormContainer';

const FormWrapper = styled.main`
  padding-top: 100px;
`;


const AddLink = () => (
  <div>
    <Header>
      <BackButton to="/dashboard" className="button__back button__left" />

      Add Link 
    </Header>

    <FormWrapper>
      <PostFormContainer /> 
    </FormWrapper>
  

  </div>
);

export default AddLink;
