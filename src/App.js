import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<BookList />} />
                  <Route path="/add-book" element={<AddBook />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;