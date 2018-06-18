import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes'; /* eslint-ignore */

import 'normalize.css';
import 'flexboxgrid';
import './scss/index.scss';

const App = () => (
  <Router>
    <div>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
