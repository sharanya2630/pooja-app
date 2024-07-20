import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      alert('Pooja successfully booked!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      {step === 1 ? (
        <div className="form-step">
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Contact Number:
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
          </label>
          <button type="submit" className="form-button">Next</button>
        </div>
      ) : (
        <div className="form-step">
          <p>Review Details</p>
          <p>Name: {name}</p>
          <p>Contact Number: {contact}</p>
          <button type="submit" className="form-button">Proceed to Book</button>
        </div>
      )}
    </form>
  );
};

export default BookingForm;













// import React, { useState } from 'react';

// const BookingForm = () => {
//   const [name, setName] = useState('');
//   const [contact, setContact] = useState('');
//   const [step, setStep] = useState(1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (step === 1) {
//       setStep(2);
//     } else {
//       alert('Pooja successfully booked!');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {step === 1 ? (
//         <>
//           <label>
//             Name:
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//           </label>
//           <label>
//             Contact Number:
//             <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
//           </label>
//           <button type="submit">Next</button>
//         </>
//       ) : (
//         <>
//           <p>Review Details</p>
//           <p>Name: {name}</p>
//           <p>Contact Number: {contact}</p>
//           <button type="submit">Proceed to Book</button>
//         </>
//       )}
//     </form>
//   );
// };

// export default BookingForm;
