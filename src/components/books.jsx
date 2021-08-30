import React, { Component } from 'react';
import Book from './common/book';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { id: 1, title: 'book1' },
        { id: 2, title: 'book2' },
        { id: 3, title: 'book3' },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <section>
        <ul>
          {books.map((book) => (
            <Book key={book.id} bookTitle={book.title} />
          ))}
        </ul>
        <form>
          <input type="text" />
          <button type="submit">Add book</button>
        </form>
      </section>
    );
  }
}

export default Books;
