/* eslint-disable arrow-body-style */

/* store.js is simply the Redux store and the routes.js
aggregates all routes together for easy access. */
import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

const rootReducer = combineReducers();

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
