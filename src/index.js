import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import kanbanApp from './reducers';

import App from './components/App.jsx';
import './components/App.scss';

const store = createStore(kanbanApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
