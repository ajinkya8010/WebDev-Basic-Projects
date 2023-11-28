import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentRegistration = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    axios.post('http://localhost:3001/register', { username, password })
      .then((response) => {
        console.log(response.data);
        // Display success message
        alert('Registration successful!');

        // Navigate to the submit complaint page
        navigate('/submit-complaint');
      })
      .catch((error) => {
        console.error('Error during registration:', error.response.data);
        // Handle registration failure
        alert('Registration failed. Please try again.');
      });
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <label>Name:</label>
      <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default StudentRegistration;
