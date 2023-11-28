import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Catalogue = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of books from the backend
    axios.get('http://localhost:5000/books').then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Catalogue Page</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} - ${book.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogue;
