import './Navbar.css';
import { useState } from 'react';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu.png';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <a href="/">Home</a>
        <a href="/properties">Properties</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="right">
        <a href="/signin">Sign in</a>
        <a href="/signup" className="register">Sign up</a>
        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          <img src={menuIcon} alt="menu" />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <a href="/">Home</a>
          <a href="/properties">Properties</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/signin">Sign in</a>
          <a href="/signup" className="register">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
