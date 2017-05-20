import React from 'react';


class AudiclePlayer extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      audio: null
    }

		this.playAudio = this.playAudio.bind(this);
  }

  componentDidMount() {
    this.setState({audio: document.getElementById('music')});
  }	

	playAudio() {
    const { audio } = this.state;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
	}

  render() {
    return (
      <div>
       	<audio id="music" autoPlay preload="true">
					<source src={this.props.currentFile} />
				</audio>

				<button id="pButton" className="play" onClick={this.playAudio}>CLICK ME</button>	

      </div>
    )
  }
}

export default AudiclePlayer;
