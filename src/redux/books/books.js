const addbook = 'ADD_BOOK';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case addbook: {
      const clonedState = [...state];
      clonedState.push(action.payload);
      return clonedState;
    }
    default:
      return state;
  }
};

export default booksReducer;
