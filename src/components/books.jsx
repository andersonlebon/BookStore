import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';
import Book from './common/book';

const Books = () => {
  const { booksReducer: books } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const handleChange = ({ currentTarget }) => {
    const stateCloned = state;
    stateCloned[currentTarget.name] = currentTarget.value;
    setState({ ...state, ...stateCloned });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author } = state;
    dispatch(addBook({ title, author }));
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
        <input name="title" onChange={handleChange} value={inputBook} type="text" />
        <button type="submit">Add book</button>
      </form>
    </section>
  );
};

export default Books;
