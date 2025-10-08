// src/components/Navbar.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          IKIGAI
        </Link>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/shop" onClick={() => setMenuOpen(false)}>
          Shop
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
        <NavLink to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}>
          <FiShoppingCart className="cart-icon" />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </NavLink>
        {user ? (
          <button className="auth-btn" onClick={logout}>
            Logout ({user.username})
          </button>
        ) : (
          <>
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </NavLink>
            <NavLink to="/register" onClick={() => setMenuOpen(false)}>
              Register
            </NavLink>
          </>
        )}
      </nav>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
