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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/properties">Properties</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-icons">
        <Link to="/saved" className="icon-link">
          <i className="icon-heart">&#9825;</i>
        </Link>
        <Link to="/profile" className="icon-link">
          <i className="icon-user">&#128100;</i>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
