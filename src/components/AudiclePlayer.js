import React from 'react';


class AudiclePlayer extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      play: false
    }

		this.onPressPlayPause = this.onPressPlayPause.bind(this);
  }

  componentDidMount() {
    console.log("player did mount");
  }	

  componentDidUpdate( prevProps, prevState ) {
    console.log("did update"); 
  }

  onPressPlayPause( e ) {
    e.stopPropagation();
    this.togglePlayAudio();
  }

	togglePlayAudio() {
    console.log(this.state.play, this.player);
    if( this.state.play ) {
      this.pauseAudio();
    } else {
      this.playAudio();
    }
	}

  playAudio() {
    this.player.play();
    this.setState({play: true});
  }
  pauseAudio() {
    this.player.pause();
    this.setState({play: false});
  }

  render() {
    return (
      <div>
        <audio 
          ref={ (player) => { this.player = player } }
          preload="true">
					<source src={this.props.src} />
				</audio>

				<button id="pButton" className="play" onClick={this.onPressPlayPause}>CLICK ME</button>	

        <p>{ this.props.src }</p>

      </div>
    )
  }
}

export default AudiclePlayer;
