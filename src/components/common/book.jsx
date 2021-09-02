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
        <button onClick={() => onDelete(book.item_id)} type="button">
          Delete
        </button>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
