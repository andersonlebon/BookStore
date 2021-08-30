import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';
import Header from './components/header';
import './sass/App.css';

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Switch>
          <Route path="/books" component={Books} />
          <Route path="/categories" component={Categories} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
