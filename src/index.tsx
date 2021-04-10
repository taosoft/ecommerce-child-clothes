import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Blog from './components/LandingPage/Blog';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Blog />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
