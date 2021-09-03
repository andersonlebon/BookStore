import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { postBook, baseURL, deleteBook } from '../redux/middleware/api';
import 'react-circular-progressbar/dist/styles.css';
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
      payload: { baseURL },
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
    postBook(newBook, dispatch);
  };

  const handleDelete = (id) => {
    deleteBook(id, dispatch);
  };

  const { title } = state;
  return (
    <section>
      <ul className="flex flex-col al-center w100 books-container">
        {books.map((book) => (
          <Book key={book.item_id} onDelete={handleDelete} book={book} />
        ))}
      </ul>
      <div style={{ width: 30, height: 30 }}>
        <CircularProgressbar value={66} />
      </div>
      <form onSubmit={handleSubmit}>
        <Input name="title" value={title} onChange={handleChange} />
        <button type="submit">Add book</button>
      </form>
    </section>
  );
};

export default Books;
