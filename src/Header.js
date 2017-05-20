import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from './store/user/actions';

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

const UserNav = ({logoutUser, user} ) => {
  return (
    <div className="pt-navbar-group pt-align-right">
      { user.user.displayName }&nbsp;&nbsp;
      <img src={user.user.photoURL} alt="" height="16" />
      <button className="pt-icon-log-out" onClick={ logoutUser }>Logout</button>
      <span className="pt-navbar-divider"></span>
      <button className="pt-button pt-minimal pt-icon-user"></button>
      <button className="pt-button pt-minimal pt-icon-notifications"></button>
      <button className="pt-button pt-minimal pt-icon-cog"></button>
    </div>
  )
}


class Header extends React.Component {
  render() {
    const { 
      authenticated 
    } = this.props.user;
    return (
      <nav className="pt-navbar pt-dark">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">Audicle</div>
        </div>
        { authenticated === true ? UserNav( this.props ) : '' }
      </nav>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps )( Header );
