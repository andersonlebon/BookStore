const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = (payload) => ({ type: ADD_BOOK, payload });
let bookId = 0;
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const clonedState = [...state];
      bookId += 1;
      const newBook = {
        id: bookId,
        title: action.payload.title,
      };
      clonedState.push(newBook);
      return clonedState;
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.payload.id);
    }

    default:
      return state;
  }
};

export default booksReducer;
