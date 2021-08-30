import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { books, onDelete } = this.props;

    return (
      <li className="book-item">
        <div>{books.title}</div>
        <button onClick={() => onDelete(books.id)} type="button">
          Delete
        </button>
      </li>
    );
  }
}

Book.propTypes = {
  books: PropTypes.shape({ id: PropTypes.number, title: PropTypes.string })
    .isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
