import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import api from './middleware/api';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(logger, api, thunk));
store.dispatch(() => ({
  type: 'GET_CURRENT_BOOKS',
  payload: { URL: '/' },
}));

export default store;
