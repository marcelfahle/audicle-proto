import React from 'react';
import styled from 'styled-components';

const AudioWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 80px;
  width: 100%;
`;

const AudioPlayer = () => {
  return (
    <AudioWrapper className="pt-card pt-elevation-3">Audio</AudioWrapper>
  )
};

export default AudioPlayer;
