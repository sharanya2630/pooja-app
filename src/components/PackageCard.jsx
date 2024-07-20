

// import React, { useState } from "react";
// import BookingForm from "./BookingForm";
// import "./PackageCard.css";

// const PackageCard = ({ pkg }) => {
//   const [showBookingForm, setShowBookingForm] = useState(false);

//   const openModal = () => setShowBookingForm(true);
//   const closeModal = () => setShowBookingForm(false);

//   return (
//     <div className="d-flex flex-row">
//       <div className="bg-pack">
//         <div className={`package-card ${pkg.highlighted ? "highlighted" : ""}`}>
//           <h2>
//             {pkg.price} <br /> {pkg.name}
//           </h2>
//           <p>{pkg.details}</p>
//           <button onClick={openModal}>Participate</button>
//         </div>

//         {showBookingForm && (
//           <div className="modal-overlay" onClick={closeModal}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <h3>Enter Your Details</h3>
//               <BookingForm />
//               <button className="close-button" onClick={closeModal}>
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PackageCard;

// src/components/PackageCard.js
import React, { useState } from "react";
import BookingForm from "./BookingForm";
import "./PackageCard.css";

const PackageCard = ({ pkg }) => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const openModal = () => setShowBookingForm(true);
  const closeModal = () => setShowBookingForm(false);

  return (
    <div className="package-card">
      <h2>
        {pkg.price} <br /> {pkg.name}
      </h2>
      <p>{pkg.details}</p>
      <button onClick={openModal}>Participate</button>

      {showBookingForm && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Enter Your Details</h3>
            <BookingForm />
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageCard;
