import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:3001/student/login', { username, password })
      .then((response) => {
        console.log(response.data);
        alert('Login successful!');
        navigate('/submit-complaint');
      })
      .catch((error) => {
        console.error('Error during student login:', error.response.data);
        alert('Login failed. Please try again.');
      });
  };

  return (
    <div>
      <h2>Student Login</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>

      <div>
        <p>New user? <Link to="/student/register">Register here</Link></p>
      </div>
    </div>
  );
};

export default StudentLogin;
