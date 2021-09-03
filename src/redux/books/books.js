/* eslint-disable camelcase */
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
let prog = 10;

export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const { title, category, item_id } = action.payload;
      if (prog > 100) prog = 0;
      const newBook = {
        item_id,
        title,
        category,
        progress: prog + 15,
      };
      prog += 3;
      return [...state, newBook];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.item_id !== action.payload.id);
    }

    case 'GET_CURRENT_BOOKS_SUCCESS': {
      const books = action.payload;
      prog = 10;
      books.forEach((book) => {
        if (!book.progress) {
          prog += 10;
          // eslint-disable-next-line no-param-reassign
          book.progress = prog;
        }
      });

      return [...books];
    }

    default:
      return state;
  }
};

export default booksReducer;
