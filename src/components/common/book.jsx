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
      <li className="book-item w100">
        <div className="book-info">
          <div>{book.title}</div>
          <div className="book-btns">
            <button onClick={() => onDelete(book.item_id)} type="button">
              Delete
            </button>
          </div>
        </div>
        <div className="book-progress  flex flex-center-all">
          <p>Completed</p>
        </div>
        <div className="update flex flex-col al-end">
          <p className="text-smal">CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
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
