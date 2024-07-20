import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
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
          <Link to="/MyPujaBookings">Puja</Link>
          <Link to="/panchang">Panchang</Link>
          <Link to="/temples">Temples</Link>
          <Link to="/library">Library</Link>
        </div>
        <div className="profile-icon" onClick={toggleProfileMenu}>
          Profile
        </div>
      </div>
      {showProfileMenu && (
        <div className="profile-menu">
          <ul>
            <li>
              <Link to="/my-profile">My Profile</Link>
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
