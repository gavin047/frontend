import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data);
    };
    
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author} - ${book.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;