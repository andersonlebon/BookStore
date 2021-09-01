const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });
let bookId = 0;
const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      bookId += 1;
      const { title, auther } = action.payload;
      const newBook = {
        id: bookId,
        title,
        auther,
      };
      return { ...state, newBook };
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.payload.id);
    }

    case 'GET_CURRENT_BOOKS': {
      return action.payload;
    }

    default:
      return state;
  }
};

export default booksReducer;
