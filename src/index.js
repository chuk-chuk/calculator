import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Application from './components/Application';
import rootReducer from './reducer'; //defaULT IMPORT
import './index.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; //named import
import { createLogger } from 'redux-logger';

const logger = createLogger({
  duration: true,
  timestamp: true,
  level: 'log',
  logger: console,
  logErrors: true,
  colors: {
    title: () => 'inherit',
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
  }
});
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><Application /></Provider>, document.getElementById('root'));
