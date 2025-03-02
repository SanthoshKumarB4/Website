import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const users = [
  { email: 'santhosh@gmail.com', password: '1234' },
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      navigate('/home'); // Navigate to home page on success
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Login" />
        </form>
        {error && <p className="error">{error}</p>}
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
