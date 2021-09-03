import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postBook, baseURL, deleteBook } from '../redux/middleware/api';
import Book from './common/book';
import Input from './common/input';

let itemId = 0;

const Books = () => {
  const { booksReducer: books } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    categories: '',
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
    const { title, categories } = state;
    itemId += 1;
    const newBook = {
      item_id: `${title + itemId}`,
      title,
      category: categories,
    };

    postBook(newBook, dispatch);
    setState({ title: '' });
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

      <form onSubmit={handleSubmit}>
        <h2 className="type">ADD NEW BOOK</h2>
        <div className="form-control w100 flex j-between">
          <Input
            name="title"
            value={title}
            placeholder="Book title"
            onChange={handleChange}
          />
          <select onChange={handleChange} name="categories">
            <option value="action" defaultValue hidden>
              Categories
            </option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="fiction">Fiction</option>
          </select>
          <button className="blue-btn" type="submit">
            Add book
          </button>
        </div>
      </form>
    </section>
  );
};

export default Books;
