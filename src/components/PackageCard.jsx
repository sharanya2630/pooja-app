// import React, { useState } from 'react';
// import BookingForm from './BookingForm';
// import './PackageCard.css'; // Import CSS for styling

// const PackageCard = ({ pkg }) => {
//   const [showBookingForm, setShowBookingForm] = useState(false);

//   return (
//     <div className="package-card">
//       <h2>{pkg.name}</h2>
//       <p>{pkg.details}</p>
//       <button onClick={() => setShowBookingForm(true)}>Participate</button>
//       {showBookingForm && (
//         <div className="booking-form-container">
//           <h3>Enter Your Details</h3>
//           <BookingForm />
//         </div>
//       )}
//     </div>
//   );
// };

// export default PackageCard;

import React, { useState } from "react";
import BookingForm from "./BookingForm";
import "./PackageCard.css"; // Import the CSS file for styling

const PackageCard = ({ pkg }) => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className={`package-card ${pkg.highlighted ? "highlighted" : ""}`}>
      <h2>
        {pkg.price} <br /> {pkg.name}
      </h2>
      <p>{pkg.details}</p>
      <button onClick={() => setShowBookingForm(true)}>Participate</button>
      {showBookingForm && (
        <div>
          <h3>Enter Your Details</h3>
          <BookingForm />
        </div>
      )}
    </div>
  );
};

export default PackageCard;
