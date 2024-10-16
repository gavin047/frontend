import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
      try {
          const response = await axios.get('http://localhost:5000/api/books');
          setBooks(response.data);
      } catch (error) {
          console.error("Error fetching books:", error);
      }
  };

  useEffect(() => {
      fetchBooks(); // Call the fetchBooks function when the component mounts.
  }, []);

  const likeBook = async (bookId) => {
      const userId = localStorage.getItem('userId'); // Get user ID from local storage

      await axios.post(`http://localhost:5000/api/books/${bookId}/like`, { user_id: userId });
      alert('Book liked!');
      fetchBooks(); // Refresh the book list after liking.
  };

  return (
      <div>
          <h1>Book List</h1>
          <ul>
              {books.map(book => (
                  <li key={book.id}>
                      {book.title} by {book.author} - ${book.price} | Likes: {book.likes_count}
                      <button onClick={() => likeBook(book.id)}>Like</button>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default BookList;