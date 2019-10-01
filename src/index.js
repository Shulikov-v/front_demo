import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'

import 'papercss/dist/paper.css';
// import './index.css';
import App from './layout/App';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="row">
        <div className="sm-12 md-12 col">
          <div className="paper container">
            <App />
          </div>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));