import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const navigate = useNavigate();

  const handleRegistration = () => {
    // Send registration request to the backend
    axios
      .post('http://localhost:5000/register', {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log('Registration successful:', response.data);
        setRegistrationStatus('success');
        // Redirect to the home page after a successful registration
        setTimeout(() => {
            navigate('/'); // Navigate after a brief delay
        }, 1000); // Adjust the delay time as needed
      })
      .catch((error) => {
        console.error('Registration failed:', error.message);
        setRegistrationStatus('failure');
        // Handle registration failure (e.g., display an error message to the user)
      });
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>

      {registrationStatus === 'success' && (
        <p>Registration successful! You can now <Link to="/login">login</Link>.</p>
      )}

      {registrationStatus === 'failure' && (
        <p>Registration failed. Please try again or <Link to="/login">login</Link> if you already have an account.</p>
      )}
    </div>
  );
};

export default Registration;
