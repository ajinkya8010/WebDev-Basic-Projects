import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Online Book Store!</h1>
      <p>Discover a wide selection of books, from bestsellers to hidden gems. Explore our catalog and find the perfect book for you.</p>
      <p>Whether you're a fiction enthusiast, a history buff, or a science fiction lover, we have a book for every taste. Dive into the world of literature and embark on new adventures with our collection.</p>
      <p>Happy reading!</p>

      <div>
        {/* Add buttons for navigation */}
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/registration">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
