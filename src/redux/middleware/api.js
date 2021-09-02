import axios from 'axios';
import { addBook, removeBook } from '../books/books';

const GET_BOOKS = 'GET_BOOKS';
const GET_BOOKS_SUCCESS = 'GET_CURRENT_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'ERROR';
export const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cD1Er8iJ77cdEAvj1yxk/books/';

export const postBook = async (newBook, dispatch) => {
  const { data } = await axios.post(baseURL, newBook, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  if (data === 'Created') dispatch(addBook(newBook));
};

export const deleteBook = async (id, dispatch) => {
  const { data } = await axios.delete(`${baseURL}${id}`);
  if (data === 'The book was deleted successfully!') {
    dispatch(removeBook({ id }));
  }
};

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== GET_BOOKS) return next(action);
  next(action);
  const { baseURL } = action.payload;
  try {
    const { data: books } = await axios.get(baseURL);
    const result = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in books) {
      if (key) {
        result.push({ ...books[key][0], item_id: key });
      }
    }
    return dispatch({ type: GET_BOOKS_SUCCESS, payload: result });
  } catch (error) {
    return dispatch({ type: GET_BOOKS_FAILURE, payload: error });
  }
};

export default api;
