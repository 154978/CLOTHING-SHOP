// src/pages/Register.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.css"; 

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    register(email, password, fullName);
    navigate("/");
  };

  return (
    <div className="register-page-container">
      <div className="register-card">
        <div className="register-form-section">
          <h2 className="register-title">Create an account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="terms-checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to the Terms & Privacy</label>
            </div>
            
            <button type="submit" className="create-account-button">
              Create account
            </button>

            <p className="login-prompt">
              Already have an account? <Link to="/login" className="login-link">Sign in</Link>
            </p>
          </form>
        </div>

        <div className="register-welcome-section">
          <h3 className="welcome-title">Welcome</h3>
          <p className="welcome-message">
            Fast, simple, and secure. Create your account to get started and enjoy the full experience with MyApp.
          </p>
          <button className="learn-more-button">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Register;