import React, { useState /* useEffect  */ } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';
// import store from '../redux/configureStore';
import Book from './common/book';

const Books = () => {
  const { booksReducer: books } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(books);
  const [state, setState] = useState({
    inputBook: '',
  });
  // setState({
  // });

  const handleChange = ({ currentTarget }) => {
    setState({ ...state, inputBook: currentTarget.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { inputBook } = state;
    dispatch(addBook({ title: inputBook }));
  };

  const handleDelete = (id) => {
    dispatch(removeBook({ id }));
  };

  const { inputBook } = state;
  return (
    <section>
      <ul>
        {books.map((book) => (
          <Book key={book.id} onDelete={handleDelete} books={book} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputBook} type="text" />
        <button type="submit">Add book</button>
      </form>
    </section>
  );
};

export default Books;
