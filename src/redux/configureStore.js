import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import api from './middleware/api';

const reducer = combineReducers({
  booksReducer,
});
const store = configureStore({ reducer, middleware: [thunk, logger, api] });
store.dispatch({
  type: 'GET_BOOKS',
  payload: { },
});

export default store;
