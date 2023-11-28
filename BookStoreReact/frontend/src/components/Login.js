import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post('http://localhost:5000/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log('Login successful:', response.data);
        setLoginStatus('success');
        setTimeout(() => {
          navigate('/catalogue'); // Navigate after a brief delay
        }, 1000); // Adjust the delay time as needed
      })
      .catch((error) => {
        console.error('Login failed:', error.message);
        setLoginStatus('failure');
      });
  };

  return (
    <div>
      <h2>Login Page</h2>
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
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>

      {loginStatus === 'success' && <p>Login successful! Redirecting...</p>}

      {loginStatus === 'failure' && (
        <p>Login failed. Please check your username and password or register if you don't have an account.</p>
      )}

      <p>
        Don't have an account? <Link to="/registration">Register</Link>
      </p>
    </div>
  );
};

export default Login;
