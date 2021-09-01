const GET_BOOKS = 'GET_CURRENT_BOOKS';
const GET_BOOKS_SUCCESS = 'GET_CURRENT_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'GET_CURRENT_BOOKS_FAILURE';

const api = (store) => (next) => (action) => {
  if (action.type === 'GET_CURRENT_BOOKS') return next(action);
  next(action);
};
