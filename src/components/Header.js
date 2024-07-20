// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Sri Mandir</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
        <Link to="/puja" className="nav-link">
          Puja
        </Link>

        <div className="dropdown">
          <button className="dropbtn">Library</button>
          <div className="dropdown-content">
            <Link to="/library/book1" className="dropdown-link">
              Book 1
            </Link>
            <Link to="/library/book2" className="dropdown-link">
              Book 2
            </Link>
            <Link to="/library/book3" className="dropdown-link">
              Book 3
            </Link>
          </div>
        </div>
      </nav>
      <div className="header-right">
        <div className="dropdown">
          <button className="dropbtn">English</button>
          <ul className="dropdown-content">
            <li className="dropdown-link">English</li>
            <li className="dropdown-link">Hindi</li>
          </ul>
        </div>

        <Link to="/contact" className="nav-link">
          <img
            src="path_to_contact_logo"
            alt="Contact"
            className="contact-logo"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
