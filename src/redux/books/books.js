/* eslint-disable camelcase */
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const { title, category, item_id } = action.payload;
      const newBook = {
        item_id,
        title,
        category,
      };
      return [...state, newBook];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.payload.id);
    }

    case 'GET_CURRENT_BOOKS_SUCCESS': {
      const books = action.payload;

      return [...state, ...books];
    }

    default:
      return state;
  }
};

export default booksReducer;
