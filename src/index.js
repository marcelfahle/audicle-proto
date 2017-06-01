import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//import configureStore from './store/configureStore';

import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'


import App from './App';
import './index.css';

import rootReducer  from './store/reducers';

const history = createBrowserHistory()
const middleware = routerMiddleware(history)


const store = createStore( 
  connectRouter(history)(
    combineReducers({
    ...rootReducer,
    })
  ),
  composeWithDevTools(
    applyMiddleware( 
      middleware, 
      thunk 
    )
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
