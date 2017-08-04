import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './components/app';
import Async from './middleware/async';
/* Index Config Redux, Middleware and Render the Application */
// Create redux store and apply middleware
const createStoreWithMiddleware = applyMiddleware(Async)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('app')
)
