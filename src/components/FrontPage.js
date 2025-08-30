// src/components/FrontPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <h1 className="brand-name">Edu Learn</h1>
        <div className="login-card">
          <form className="login-form" onSubmit={handleLogin}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>

      <div className="login-right">
        <img src="/images/login-banner.png" alt="Login Banner" />
        <div className="overlay-text">Edify</div>
      </div>
    </div>
  );
};

export default FrontPage;
