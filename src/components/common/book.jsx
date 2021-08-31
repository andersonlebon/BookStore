import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { book, onDelete } = this.props;

    return (
      <li className="book-item">
        <div>{book.title}</div>
        <div>{book.author}</div>
        <button onClick={() => onDelete(book.id)} type="button">
          Delete
        </button>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
