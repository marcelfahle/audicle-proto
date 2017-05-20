import React from 'react';
import { connect } from 'react-redux';
//import { Button } from '@blueprintjs/core';
import styled from 'styled-components';

import { loginUser } from './store/user/actions';

const Button = styled.button`
  height: 50px;
  width: calc(100% - 80px);
	margin-left: 40px;
	margin-right: 40px;
  border-radius: 5px;
  display: block;
  background-color: #3C5193;
  border: none;
  color: #fff;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 300;
  line-height: 34px;
`
const LoginWrapper = styled.p`
  position: absolute;
  bottom: 80px;
  width: 100%;
`;


const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = ( dispatch ) => {
  return {
    loginUser: () => dispatch( loginUser() ),
  };
};

class Login extends React.Component {
  render() {
    return (
      <LoginWrapper>
        <Button text="Login with Facebook" onClick={ this.props.loginUser }>
          Login with Facebook
        </Button>
      </LoginWrapper>
      
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)( Login );
