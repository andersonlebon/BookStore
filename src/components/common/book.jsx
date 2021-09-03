import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
        <div className="book-progress  flex al-center">
          <div style={{ width: 50, height: 55 }}>
            <CircularProgressbar value={book.progress} />
          </div>
          <div className="prog-info flex-col flex flex-center-all">
            <p className="prog-100">
              {book.progress}
              {' '}
              %
            </p>
            <p>Completed</p>
          </div>
        </div>
        <div className="update flex-col flex">
          <p className="text-smal">CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button className="blue-btn" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    progress: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
