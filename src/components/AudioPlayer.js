import React from 'react';
import {Motion, spring} from 'react-motion';
import AudiclePlayer from './AudiclePlayer.js';

import { connect } from 'react-redux';
import { toggleView } from './../store/audio_player/actions';

import styled from 'styled-components';


const AudioWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
  background-color: ${ props => props.maximized ? 'rgba(0,0,0,0.7)' : '#fff' };
  width: 100%;
  height: ${ props => props.height }px;
`;



class AudioPlayer extends React.Component {


  render() {
    if (!this.props.currentTitle && !this.props.currentFile ) {
      return <div></div>;
    }
    const { currentTitle, currentFile } = this.props;

    return (
      <Motion 
        defaultStyle={{h: 121}} 
        style={{h: spring( this.props.maximized ? 327 : 121 )}}
      >
        { ({ h }) => (
          <AudioWrapper 
            onClick={ this.props.toggleView }  
            height={h}
            maximized={ this.props.maximized }
            className=""
          >
            <p>
              { currentTitle } 
            </p>
            <div>
              { currentFile? <AudiclePlayer src={currentFile} />  : ''  }
            </div>
          </AudioWrapper>
        ) }
      </Motion>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentFile: state.audioPlayer.currentFile,
    currentTitle: state.audioPlayer.currentTitle,
    maximized: state.audioPlayer.maximized
  } 
}
const mapDispatchToProps = ( dispatch ) => {
  return {
    toggleView: () => dispatch(toggleView() ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);



