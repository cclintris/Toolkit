import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from "./store/reducers/index";
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

const capAtTen = store => next => action => {
  const count = store.getState().counter.count
  if(count >= 10) {
    return next({type: 'DECREMENT'})
  }
  return next(action)
}

const store = createStore(
  allReducers,
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
