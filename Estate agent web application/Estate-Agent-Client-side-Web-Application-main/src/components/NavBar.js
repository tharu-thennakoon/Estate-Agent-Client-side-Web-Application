// components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css"; // CSS for styling

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <Link to="/">
          <img src="/images/logo.png" alt="Estate Explorer Logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li> {/* Home link */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-actions">
        <Link to="/login" className="login-btn">Log In</Link> {/* Login Button */}
      </div>
    </nav>
  );
};

export default NavBar;
