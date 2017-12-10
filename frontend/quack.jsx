import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store; 

  store = configureStore();
  const root = document.getElementById('root');
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});