import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', { email, password })
      .then(response => {
        console.log(response.data);
        alert('Login successful!');
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('Invalid credentials!');
      });
  };

  return (
    <div className="login">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;