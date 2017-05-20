import React from 'react';
import styled from 'styled-components';



const Header = styled.header`
  background: white;
  position: fixed;
  height: 44px;
  font-size: 18px;
  line-height: 44px;
  height: 44px;
  border-bottom: 1px solid #a7a7a7;
  width: 100%;
  z-index: 100;

  > .button__add {
    position: absolute;
    z-index: 102;
    top: 15px;
  }
  > .button__back {
    position: absolute;
    z-index: 103;
  }
  > .button__left {
    left: 20px;  
  }
  > .button__right {
    right: 20px;
  }
`;

export default ({ children }) => (
  <Header>
    { children }
  </Header>
);

