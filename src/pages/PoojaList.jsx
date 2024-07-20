// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import PoojaCard from '../components/PoojaCard';

// const PoojaList = () => {
//   const poojas = [
//     { id: 1, name: 'Pooja 1', description: 'Description of Pooja 1' },
//     { id: 2, name: 'Pooja 2', description: 'Description of Pooja 2' },
//     { id: 3, name: 'Pooja 3', description: 'Description of Pooja 3' },
//   ];

//   return (
//     <div>
//       <Navbar />
//       <h1>Pooja List</h1>
//       {poojas.map(pooja => (
//         <PoojaCard key={pooja.id} pooja={pooja} />
//       ))}
//     </div>
//   );
// };

// export default PoojaList;

// // src/pages/HomePage.js
// import React from "react";
// import Card from "../components/Card";
// import Header from "../components/Header";

// const HomePage = () => {
//   return (
//     <div>
//       <Header />
//       <div
//         id="carouselExampleSlidesOnly"
//         class="carousel slide"
//         data-ride="carousel"
//       >
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img
//               src="https://i.ibb.co/L6WhnVD/img-desktop-banner-review.webp"
//               class="d-block w-100"
//               alt="..."
//             />
//           </div>
//           <div class="carousel-item">
//             <img src="https://i.ibb.co/k11MgmJ/img-desktop-banner-devotees.webp"  class="d-block w-100" alt="..." />
//           </div>
//           <div class="carousel-item">
//             <img src="https://i.ibb.co/k11MgmJ/img-desktop-banner-devotees.webp" class="d-block w-100" alt="..." />
//           </div>
//         </div>
//       </div>

//       <div className="card-container">
//         <Card
//           title="Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek"
//           description="For Prevention of Misfortunes and Adversities"
//           location="Shree Shanidev Temple, Shani Shingnapur, Maharashtra"
//           date="20 July, Saturday, Ashadha Shukla Chaturdashi"
//           image="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719660451156.webp&w=3840&q=100"
//           link="/details/1"
//         />
//         <Card
//           title="Maa Bagalamukhi Tantra Yukta Havan"
//           description="For Victory in Court Cases and Victory over Enemies"
//           location="Maa Bagalamukhi Temple, Haridwar, Uttarakhand"
//           date="21 July, Sunday, Ashadha Shukla Chaturdashi"
//           image="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719660451156.webp&w=3840&q=100"
//           link="/details/2"
//         />
//         <Card
//           title="Divya Mahakali Tantrokta Havan"
//           description="For Courage and Protection from Obstacles"
//           location="Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal"
//           date="20 July, Saturday, Ashadha Shukla Purnima"
//           image="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719660451156.webp&w=3840&q=100"
//           link="/details/3"
//         />
//         <Card
//           title="Divya Mahakali Tantrokta Havan"
//           description="For Courage and Protection from Obstacles"
//           location="Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal"
//           date="20 July, Saturday, Ashadha Shukla Purnima"
//           image="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719660451156.webp&w=3840&q=100"
//           link="/details/3"
//         />
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import PoojaCard from "../components/PoojaCard";
import Navbar from "../components/Navbar";
import "./PoojaList.css"; // Import the CSS file for styling

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
      "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719660451156.webp&w=3840&q=100",
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
    title: "ANOTHER PUJA SPECIAL",
    name: "Another Puja Name",
    description: "For Peace and Prosperity",
    location: "Another Temple, City, State",
    date: "22 July, Monday, Some Date",
    image:
      "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719660451156.webp&w=3840&q=100",
  },
  {
    id: 5,
    title: "ANOTHER PUJA SPECIAL",
    name: "Another Puja Name",
    description: "For Peace and Prosperity",
    location: "Another Temple, City, State",
    date: "22 July, Monday, Some Date",
    image:
      "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719660451156.webp&w=3840&q=100",
  },
  {
    id: 6,
    title: "ANOTHER PUJA SPECIAL",
    name: "Another Puja Name",
    description: "For Peace and Prosperity",
    location: "Another Temple, City, State",
    date: "22 July, Monday, Some Date",
    image:
      "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719660451156.webp&w=3840&q=100",
  },
  // Add more pooja objects as needed
];

const PoojaList = () => {
  return (
    <div>
      <Navbar />
      <div className="home-page">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i.ibb.co/L6WhnVD/img-desktop-banner-review.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/k11MgmJ/img-desktop-banner-devotees.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.ibb.co/k11MgmJ/img-desktop-banner-devotees.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="pooja-cards-container">
          {poojas.map((pooja) => (
            <PoojaCard key={pooja.id} pooja={pooja} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PoojaList;
