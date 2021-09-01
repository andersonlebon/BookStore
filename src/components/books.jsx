import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';
import { postBook } from '../redux/middleware/api';
import Book from './common/book';
import Input from './common/input';

let itemId = 0;

const Books = () => {
  const { booksReducer: books } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
  });

  useEffect(() => {
    dispatch({
      type: 'GET_BOOKS',
      payload: { URL: '/' },
    });
  }, []);

  const handleChange = ({ currentTarget: input }) => {
    const stateCloned = state;
    stateCloned[input.name] = input.value;
    setState({ ...state, ...stateCloned });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title } = state;
    itemId += 1;
    const newBook = {
      item_id: `${title + itemId}`,
      title,
      category: 'Fiction',
    };

    console.log(Math.random());
    postBook(newBook);
    dispatch(addBook(newBook));
  };

  const handleDelete = (id) => {
    dispatch(removeBook({ id }));
  };

  const { title } = state;
  return (
    <section>
      <ul>
        {books.map((book) => (
          <Book key={book.id} onDelete={handleDelete} book={book} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <Input name="title" value={title} onChange={handleChange} />
        <button type="submit">Add book</button>
      </form>
    </section>
  );
};

export default Books;
