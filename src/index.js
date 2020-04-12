import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import kanbanApp from './reducers';

import App from './components/App.jsx';
import './components/App.scss';

const store = createStore(kanbanApp);

store.subscribe(() => console.log('state is', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
