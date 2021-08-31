import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// impor
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
  // additional reducers could be added here
});

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;
