import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import './index.css';
import Home from './Home/Home'
import {
  editTasks,
  displayANTBool,
  displayTaskInfoBool,
  setTaskSelected,
  displayCalBool
} from './reducers';

const rootReducer = combineReducers({
  editTasks,
  displayANTBool,
  displayTaskInfoBool,
  setTaskSelected,
  displayCalBool
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById("root")
);