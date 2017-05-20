import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Back = styled.div`
  position: absolute;
  height: 12px;
`;

const BackButton = ({ to, className }) => (
  <Back className={ className }>
    <Link to={to}>
      <img src="/images/icon-back.svg" width="13" height="12" alt="Back" />
    </Link>
  </Back>
);

export default BackButton;
