import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Plus = styled.div`
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px; 
`

const H = styled.span`
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 2px;
  top: calc(50% - 1.5px);
  background: #000;
`
const V = styled.span`
  position: absolute;
  display: inline-block;
  //rotate: 50;
  width: 2px;
  height: 100%;
  margin-left: calc(50% - 1px);
  background: #000;
`

const PlusButton = ({className, to}) => (
  <Plus className={className}>
    <Link to={ to }>
      <V></V>
      <H></H>
    </Link>
  </Plus>
);

export default PlusButton;
