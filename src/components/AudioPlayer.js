import React from 'react';
import {Motion, spring} from 'react-motion';
//import AudiclePlayer from './AudiclePlayer.js';
import Sound from 'react-sound';
import { Icon } from 'react-fa';

import { connect } from 'react-redux';
import { toggleView, play, pause, stop } from './../store/audio_player/actions';

import styled from 'styled-components';


const AudioWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
  background-color: ${ props => props.maximized ? 'rgba(0,0,0,0.7)' : '#fff' };
  width: 100%;
  -webkit-box-shadow: 0px -4px 10px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px -4px 10px -2px rgba(0,0,0,0.75);
  box-shadow: 0px -4px 10px -2px rgba(0,0,0,0.75);
  height: ${ props => props.height }px;
  p {
    font-weight: bold;
  }

  &.maximized {
    p {
      color: white;
    }  
  }
  &.minimized {
    p {
      color: black;
    }  
    
  }
`;

const PlayerControls = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 10px;
  li {
    display: inline-block;
    width: 60px;

  }
`;



function control( icon, clickHandler ) {
  const onClick = (e) => {
    e.preventDefault();
    clickHandler();
  };
  return <li><a href="#" onClick={onClick}><Icon name={icon} size="2x" /></a></li>;
}



class AudioPlayer extends React.Component {

  constructor( props ) {
    super( props );

    this.state = { position: 0}
  }


  renderCurrentTitle() {
    return <p>{ this.props.currentTitle }</p>
  }

  render() {
    if (!this.props.currentTitle && !this.props.currentFile ) {
      return <div></div>;
    }
    const { 
      currentTitle, 
      currentFile,
      playStatus,
      onPlay,
      onPause,
      onStop,
      onResume
    } = this.props;

    const controls = {
      play: playStatus === Sound.status.STOPPED,
      stop: playStatus !== Sound.status.STOPPED,
      pause: playStatus === Sound.status.PLAYING,
      resume: playStatus === Sound.status.PAUSED
    }

    return (
      <AudioWrapper className="minimized" height={140}>
        <div>
          { this.renderCurrentTitle() }
          <PlayerControls>
            { controls.play && control( "play", onPlay ) }
            { controls.stop && control( "stop", onStop ) }
            { controls.pause && control( "pause", onPause ) }
            { controls.resume && control( "play" , onResume ) }
          </PlayerControls>
        </div>
        { currentFile && 
          <Sound
            autoPlay="true"
            url={currentFile}
            playStatus={playStatus}
            onPlaying={({position}) => this.setState({position:position})}
          />}

        <p>{ Math.round(this.state.position / 1000) }s</p>


      </AudioWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentFile: state.audioPlayer.currentFile,
    currentTitle: state.audioPlayer.currentTitle,
    maximized: state.audioPlayer.maximized,
    playStatus: state.audioPlayer.playStatus
  } 
}
const mapDispatchToProps = ( dispatch ) => {
  return {
    toggleView: () => dispatch(toggleView() ),
    onPlay: () => dispatch( play() ),
    onPause: () => dispatch( pause() ),
    onStop: () => dispatch( stop() ),
    onResume: () => dispatch( play() ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);



