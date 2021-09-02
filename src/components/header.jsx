import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="w100">
        <nav className="flex w100">
          <h1>Bookstore CMS</h1>
          <ul>
            <li>
              <Link to="/books">Link Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
          <div className="user l-auto">
            <ImUser />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
