import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { bookTitle } = this.props;
    return <li>{bookTitle}</li>;
  }
}

Book.propTypes = {
  bookTitle: PropTypes.string.isRequired,
};

export default Book;
