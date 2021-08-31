import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';
import Book from './common/book';
import Input from './common/input';

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
        <Input name="title" value={title} onChange={handleChange} />
        <Input name="auther" value={auther} onChange={handleChange} />
        <button type="submit">Add book</button>
      </form>
    </section>
  );
};

export default Books;
