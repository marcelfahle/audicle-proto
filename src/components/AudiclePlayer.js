import React from 'react';


class AudiclePlayer extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      play: false
    }

		this.playAudio = this.playAudio.bind(this);
  }

  componentDidMount() {
    console.log("player did mount");
  }	

  componentWillReceiveProps( nextProps ) {
    console.log("will receive", nextProps);
  }

  componentDidUpdate( prevProps, prevState ) {
    console.log("did update"); 
    if ( !this.player ) { return; }

    const { src } = this.props;

    if (src) {
      if (prevProps.src !== this.props.src) {
        this.player.load();
      }
      this.player.play();
    } else {
      this.player.pause();
    }

  }

	playAudio( e ) {
    console.log(e, this.player);
    e.stopPropagation();
    this.player.play();
	}

  render() {
    return (
      <div>
        <audio 
          ref={ (player) => { this.player = player } }
          autoPlay 
          preload="true">
					<source src={this.props.src} />
				</audio>

				<button id="pButton" className="play" onClick={this.playAudio}>CLICK ME</button>	

        <p>{ this.props.src }</p>

      </div>
    )
  }
}

export default AudiclePlayer;
