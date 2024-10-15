import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Book List</Link>
          <Link to="/add-book">Add New Book</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;