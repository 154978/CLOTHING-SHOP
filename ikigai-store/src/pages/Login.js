// src/pages/Login.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css"; 

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password); 
    navigate("/");
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <div className="login-form-section">
          <h2 className="login-title">LOG IN</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email" 
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot?
              </Link>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>

        <div className="login-welcome-section">
          <h3 className="welcome-title">Welcome back!</h3>
          <p className="welcome-message">
            We are so happy to have you here. It's great to see you again. We
            hope you had a safe and enjoyable time away.
          </p>
          <p className="signup-prompt">
            No account yet?{" "}
            <Link to="/register" className="signup-link">
              Sign up now!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;