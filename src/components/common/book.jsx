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
      <li className="book-item w100 al-center">
        <div className="book-info w100 flex flex-col">
          <p className="type">Action</p>
          <p className="title">{book.title}</p>
          <p className="auther">Caleb buyana</p>
          <div className="book-btns flex w100 j-start">
            <button type="button"> Comment</button>
            <button onClick={() => onDelete(book.item_id)} type="button">
              Remove
            </button>
            <button type="button"> Edite</button>
          </div>
        </div>
        <div className="book-progress  flex flex-center-all">
          <p>Completed</p>
        </div>
        <div className="update">
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
