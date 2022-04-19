import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers'; // look at folders

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// reducer is imported from index.js, this reducer has an initial state declared, this then affects all the components and its props since we're passing it

ReactDOM.render(
  <Provider store ={createStore(reducer)}> 
  <Router>
      <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
