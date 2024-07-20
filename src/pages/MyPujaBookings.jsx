import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './MyPujaBookings.css'; // Import the CSS file for styling

const MyPujaBookings = () => {
  return (
    <div>
      <Navbar />
      <div className="card-container">
        <div className="card">
          <h1>My Puja Bookings</h1>
          {/* <img src="path-to-image.jpg" alt="Puja" className="card-image" /> */}
          <Link to="/pooja-list"><button className="book-button">Book Pooja</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MyPujaBookings;
