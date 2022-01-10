/* store.js is simply the Redux store and the routes.js 
aggregates all routes together for easy access. */

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  /* add your reducer here */ reducer: {},
});
export default store;
