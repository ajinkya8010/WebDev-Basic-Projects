import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    axios.post('http://localhost:3001/login', { username, password })
      .then((response) => {
        console.log(response.data);
        // Add logic here to handle successful login
        // Redirect to the AdminComplaintsView component
        navigate('/admin/complaints');
      })
      .catch((error) => {
        console.error('Error during login:', error.response.data);
        // Add logic here to handle login failure, such as displaying an error message
      });
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
