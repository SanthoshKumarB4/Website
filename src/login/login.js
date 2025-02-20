import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './login.css';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-e-4nNXJi5vqS6MRUvMyIymxgXg0BYgo",
  authDomain: "mobile-a9b58.firebaseapp.com",
  projectId: "mobile-a9b58",
  storageBucket: "mobile-a9b58.firebasestorage.app",
  messagingSenderId: "694832665353",
  appId: "1:694832665353:web:a00d5d4d185a74d52739d8",
  measurementId: "G-3V8VT2DRF2"
};


const app = initializeApp(firebaseConfig);
// Initialize Firebase
const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Successfully logged in, navigate to home
      navigate('/home');
    } catch (error) {
      setError(error.message);
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
          <input type="submit" />
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