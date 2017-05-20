import React from 'react';
import styled from 'styled-components';

import Menu from './../components/Menu';
import PlusButton from './../components/PlusButton';

import { connect } from 'react-redux';
import { logoutUser } from './../store/user/actions';

import PostsList from './../PostsList';
import AudioPlayer from './../components/AudioPlayer';
import Header from './../components/Header';
//import Header from './../Header';



var styles = {
  bmBurgerButton: {
    position: 'fixed',
    zIndex: '101',
    width: '15px',
    height: '10px',
    left: '15px',
    top: '16px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return {
    logoutUser: () => dispatch( logoutUser() ),
  }
}

class Dashboard extends React.Component {

  constructor( props ) {
    super( props );

    this.addLink = this.addLink.bind( this );
  }

  logoutUser(e) {
    console.log('logout');
  }
  
  addLink( e ) {
    console.log( 'add, yo!' );
  }


  render() {
    return (
      <div id="outer-wrapper">
        <Header>
          My Playlist

          <PlusButton 
            className="button__add button__right" 
            to="/add"
          />
        </Header>
        <Menu 
          styles={ styles } 
          pageWrapId={ "page-wrap" } 
          outerContainerId={ "outer-wrapper" }>

          <p>{ this.props.user.user.displayName }&nbsp;&nbsp;</p>
          <p>
            <button className="pt-button pt-icon-log-out" onClick={ this.props.logoutUser }>Logout</button>
          </p>
        </Menu>
        <main id="page-wrap">
          {/*}<PostFormContainer />*/}
          <PostsList />
          <AudioPlayer />
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Dashboard);
