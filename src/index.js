import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
window.store = store

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
