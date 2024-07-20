import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };
  const [language, setLanguage] = useState("English");
  const [profileOpen, setProfileOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleLibraryMenu = () => {
    setLibraryOpen(!libraryOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="https://thumbs.dreamstime.com/b/temple-hindou-avec-le-drapeau-et-arbres-d-isolement-spirituel-indou-151501421.jpg"
            alt="Sri Mandir Logo"
            className="logo-image"
          />
          Sri Mandir
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/my-puja-bookings">Puja</Link>
          <Link to="/panchang">Panchang</Link>
          <Link to="/temples">Temples</Link>
          <Link to="/library">Library</Link>
        </div>
        <select
          className="language-dropdown"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>

        <FaUserCircle
          className="profile-icon"
          title="Profile icon"
          onClick={toggleProfileMenu}
        />
      </div>

      {showProfileMenu && (
        <div className="profile-menu">
          <ul>
            <li>
              <Link to="/my-profile"></Link>
            </li>
            <li>
              <Link to="/my-puja-bookings">My Puja Bookings</Link>
            </li>
            <li>
              <Link to="/pooja-list">Book Pooja</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
