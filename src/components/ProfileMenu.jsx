import React from "react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="profile-menu">
      <ul>
        <li>
          <Link to="/my-profile">My Profile</Link>
        </li>
        <Link to="/my-puja-bookings">
          <li>My Puja Bookings</li>
        </Link>
        <Link to="/pooja-list">
          <li>Book Poojas</li>
        </Link>
      </ul>
    </div>
  );
};

export default ProfileMenu;
