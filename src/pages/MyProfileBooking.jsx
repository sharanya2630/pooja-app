import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MyProfileBooking = () => {
  return (
    <div>
      <Navbar />
      <h1>My Puja Bookings</h1>
      <div className="my-bookings">
        <img src="image.jpg" alt="Puja" />
        <Link to="/pooja-list">
          <button>Book Pooja</button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfileBooking;
