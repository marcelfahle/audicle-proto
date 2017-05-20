import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'


import { 
  loginUserSuccess,
  logoutUserSuccess
} from './store/user/actions';

//import Header from './Header';
import Dashboard from './protected/Dashboard';
import Home from './pages/Home';
import AddLink from './pages/AddLink';

// global blueprint styles
//import '@blueprintjs/core/dist/blueprint.css'
import './App.css';

import { firebaseAuth } from './config/firebaseConfig';




const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={ (props) => authed === true
        ? <Component {...props} />
        : <Redirect to={ {pathname: '/login', state: {from: props.location} } } /> }
    />
  )
};
const PublicRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={ (props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
};



class App extends Component {

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged( (user) => {
      if ( user ) {
        this.props.loginUserSuccess( user );
      } else {
        this.props.logoutUserSuccess();
      }
    });
  }
  componentWillUnmount() {
    this.removeListener()
  }



  render() {
    const {
      authenticated 
    } = this.props.user;


    return this.props.loading === true ? <h1>Loading</h1>: (
      <BrowserRouter>
          <div className="App">
            <div className="container">
              <Switch>
                <PublicRoute
                  path='/login' 
                  authed={authenticated} 
                  component={Home} 
                />
                <PrivateRoute
                  path='/add' 
                  authed={authenticated} 
                  component={ AddLink } />
                <PrivateRoute
                  authed={authenticated} 
                  path='/' 
                  component={Dashboard} 
                />
              </Switch>
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
    loading: state.loading,
    user: state.user,
    posts: state.posts
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginUserSuccess: (user) => dispatch( loginUserSuccess( user ) ),
    logoutUserSuccess: () => dispatch( logoutUserSuccess() ),
  };
}
export default connect( mapStateToProps, mapDispatchToProps )( App );
