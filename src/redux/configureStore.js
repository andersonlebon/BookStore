import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import api from './middleware/api';

const reducer = combineReducers({
  booksReducer,
});
const store = configureStore({ reducer, middleware: [thunk, api] });

export default store;
