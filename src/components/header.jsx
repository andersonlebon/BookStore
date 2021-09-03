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
      <header className="flex w100 al-center">
        <nav className="flex w100 al-center">
          <h1>Bookstore CMS</h1>
          <ul className="flex al-center">
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
          <div className="user flex flex-center-all l-auto">
            <ImUser />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
