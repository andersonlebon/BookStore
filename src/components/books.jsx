import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';
import Book from './common/book';

const Books = () => {
  const { booksReducer: books } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    auther: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    const stateCloned = state;
    stateCloned[input.name] = input.value;
    setState({ ...state, ...stateCloned });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, auther } = state;
    dispatch(addBook({ title, auther }));
  };

  const handleDelete = (id) => {
    dispatch(removeBook({ id }));
  };

  const { title, auther } = state;
  return (
    <section>
      <ul>
        {books.map((book) => (
          <Book key={book.id} onDelete={handleDelete} book={book} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleChange}
          value={title}
          type="text"
        />
        <input
          name="auther"
          onChange={handleChange}
          value={auther}
          type="text"
        />
        <button type="submit">Add book</button>
      </form>
    </section>
  );
};

export default Books;
