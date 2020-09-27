import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Route, BrowserRouter as Router} from 'react-router-dom';

import Shop from './Components/Shop';
import Buy from './Components/Buy';

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Route>
    <Route exact path="/shop">
      <React.StrictMode>
        <Shop />
      </React.StrictMode>
    </Route>
    <Route exact path="/shop/buy">
      <React.StrictMode>
        <Buy />
      </React.StrictMode>
    </Route>
  </Router>,
  document.getElementById('root')
);
