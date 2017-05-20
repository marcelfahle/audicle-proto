import React from 'react';
import styled from 'styled-components';

import Login from './../Login';

const HomeWrapper = styled.div`
  height: 100vh;
  padding-top: 20vh;
  background: white url('/images/home-bg1.jpg') no-repeat;
  background-size: cover;
`;

const Logo = styled.h1`
  height: 95px;
  margin: 0 auto;
  color: #FFFFFF;
  //font-family: "SF UI Text";
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 95px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
`


const Home = ({handleFacebookLogin}) => {
  return (
    <HomeWrapper>
      <Logo>Audicle</Logo>
      
      <Login />
      

    </HomeWrapper>
  )
};

export default Home;
