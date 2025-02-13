// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import PackageCard from '../components/PackageCard';

// const PoojaDetailPage = () => {
//   const { id } = useParams();
//   const [showPackages, setShowPackages] = useState(false);

//   const packages = [
//     { id: 1, name: 'Package 1', details: 'Details of Package 1' },
//     { id: 2, name: 'Package 2', details: 'Details of Package 2' },
//     { id: 3, name: 'Package 3', details: 'Details of Package 3' },
//   ];

//   return (
//     <div>
//       <Navbar />
//       <h1>Pooja Detail Page - {id}</h1>
//       <button onClick={() => setShowPackages(true)}>Select Pooja Package</button>
//       {showPackages && (
//         <div>
//           {packages.map(pkg => (
//             <PackageCard key={pkg.id} pkg={pkg} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PoojaDetailPage;

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PackageCard from "../components/PackageCard";
import PackageCardPage from "../components/PackageCardPage";
import "./PoojaDetailPage.css"; // Import the CSS file for styling

const PoojaDetailPage = () => {
  const { id } = useParams();
  const [showPackages, setShowPackages] = useState(false);

  const poojas = [
    {
      id: 1,
      title: "SATURDAY SHANI SHINGNAPUR SPECIAL",
      name: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
      description: "For Prevention of Misfortunes and Adversities",
      location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
      date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
      image:
        "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719660451156.webp&w=3840&q=100",
    },
    {
      id: 2,
      title: "MAHAVIDYA PURNIMA SPECIAL",
      name: "Maa Bagalamukhi Tantra Yukta Havan",
      description: "For Victory in Court Cases and Victory over Enemies",
      location: "Maa Bagalamukhi Temple, Haridwar, Uttarakhand",
      date: "21 July, Sunday, Ashadha Shukla Chaturdashi",
      image:
        "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720890969814.webp&w=3840&q=75",
    },
    {
      id: 3,
      title: "PURNIMA SHAKTIPEETH NIGHT SPECIAL",
      name: "Divya Mahakali Tantrokta Havan",
      description: "For Courage and Protection from Obstacles",
      location: "Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal",
      date: "20 July, Saturday, Ashadha Shukla Purnima (From 05:59 PM, July 20 to 03:46 PM, July 21)",
      image:
        "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719660451156.webp&w=3840&q=100",
    },
    {
      id: 4,
      title: "SATURDAY SHANI SHINGNAPUR SPECIAL",
      name: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
      description: "For Prevention of Misfortunes and Adversities",
      location: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
      date: "20 July, Saturday, Ashadha Shukla Chaturdashi",
      image:
        "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719660451156.webp&w=3840&q=100",
    },
    {
      id: 5,
      title: "MAHAVIDYA PURNIMA SPECIAL",
      name: "Maa Bagalamukhi Tantra Yukta Havan",
      description: "For Victory in Court Cases and Victory over Enemies",
      location: "Maa Bagalamukhi Temple, Haridwar, Uttarakhand",
      date: "21 July, Sunday, Ashadha Shukla Chaturdashi",
      image:
        "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720890969814.webp&w=3840&q=75",
    },
    {
      id: 6,
      title: "PURNIMA SHAKTIPEETH NIGHT SPECIAL",
      name: "Divya Mahakali Tantrokta Havan",
      description: "For Courage and Protection from Obstacles",
      location: "Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal",
      date: "20 July, Saturday, Ashadha Shukla Purnima (From 05:59 PM, July 20 to 03:46 PM, July 21)",
      image:
        "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719660451156.webp&w=3840&q=100",
    },
  ];

  const pooja = poojas.find((p) => p.id === parseInt(id));

  const handleSelectPackage = () => {
    setShowPackages(true);
  };

  return (
    <div>
      <Navbar />
      <div className="pooja-detail-container">
        <div className="pooja-detail-image">
          <img src={pooja.image} alt={pooja.name} />
        </div>
        <div className="pooja-detail-info">
          <h1>{pooja.name}</h1>
          <p>{pooja.description}</p>
          <p>
            <strong>Location:</strong> {pooja.location}
          </p>
          <p>
            <strong>Date:</strong> {pooja.date}
          </p>
          <button onClick={handleSelectPackage}>Select Pooja Package</button>
        </div>
      </div>

      {showPackages ? (
        <div>
          <PackageCardPage />
        </div>
      ) : (
        <div className="default-view">
          {/* Default content or a message to select a package */}
          <p>Please select a package to view details.</p>
        </div>
      )}
    </div>
  );
};

export default PoojaDetailPage;
