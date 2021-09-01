import axios from 'axios';

const GET_BOOKS = 'GET_BOOKS';
const GET_BOOKS_SUCCESS = 'GET_CURRENT_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'ERROR';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cD1Er8iJ77cdEAvj1yxk/books/';

export const postBook = (newBook) => {
  axios.post(baseURL, newBook, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
};

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== GET_BOOKS) return next(action);
  next(action);
  const { URL, method, data } = action.payload;
  try {
    const { data: books } = await axios.request({
      baseURL,
      URL,
      method,
      data,
    });
    const result = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in books) {
      if (key) {
        result.push({ ...books[key][0], id: key });
      }
    }
    return dispatch({ type: GET_BOOKS_SUCCESS, payload: result });
  } catch (error) {
    return dispatch({ type: GET_BOOKS_FAILURE, payload: error });
  }
};

export default api;
