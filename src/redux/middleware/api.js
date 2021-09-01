// import axios from 'axios';

// const GET_BOOKS = 'GET_CURRENT_BOOKS';
// const GET_BOOKS_SUCCESS = 'GET_CURRENT_BOOKS_SUCCESS';
// const GET_BOOKS_FAILURE = 'GET_CURRENT_BOOKS_FAILURE';

// // eslint-disable-next-line consistent-return
// const api = ({ dispatch }) => (next) => async (action) => {
//   if (action.type !== GET_BOOKS) return next(action);
//   next(action);
//   const { URL, method, data } = action.payload;
//   try {
//     const response = await axios.request({
//       baseURL:
//           'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cD1Er8iJ77cdEAvj1yxk/books/',
//       URL,
//       method,
//       data,
//     });
//     // const res = await response.data;
//     dispatch({ type: GET_BOOKS_SUCCESS, payload: response.data });
//   } catch (error) {
//     return dispatch({ typeof: GET_BOOKS_FAILURE, payload: error });
//   }
// };
const api = ({ dispatch }) => (next) => async (action) => {
  if (typeof action === 'function') {
    next(action());
    console.log(dispatch);
  }
};
export default api;
