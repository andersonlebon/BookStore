import axios from 'axios';

const GET_BOOKS = 'GET_CURRENT_BOOKS';
const GET_BOOKS_SUCCESS = 'GET_CURRENT_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'GET_CURRENT_BOOKS_FAILURE';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cD1Er8iJ77cdEAvj1yxk/books/';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== GET_BOOKS) return next(action);
  next(action);
  //   const { URL, method, data } = action.payload;
  try {
    // const response = await axios.get({
    //   baseURL,
    //   URL,
    //   method,
    //   data,
    // });
    const { data } = await axios.get(baseURL);

    const arr = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
      if (key) {
        arr.push({ ...data[key][0], id: key });
      }
    }
    console.log(arr);
    return dispatch({ type: GET_BOOKS_SUCCESS, payload: arr });
  } catch (error) {
    return dispatch({ type: GET_BOOKS_FAILURE, payload: error });
  }
};

export default api;
