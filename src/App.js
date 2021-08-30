import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
function App() {
  return (
    <Router>
      <main>
        <Header />
      </main>
    </Router>
  );
}

export default App;
