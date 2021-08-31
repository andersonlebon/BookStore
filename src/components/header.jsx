import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addBook } from '../redux/books/books';
import store from '../redux/configureStore';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    store.dispatch(addBook({ title: 'hello' }));
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/books">Link Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
