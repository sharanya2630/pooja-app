// src/components/Card.js
import React from "react";
// import { useNavigate } from 'react-router-dom';
import "./Card.css";

const Card = ({ title, description, location, date, image, link }) => {
  //   const navigate = useNavigate();

  const handleParticipate = () => {
    // navigate(link);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{location}</p>
        <p>{date}</p>
        <button onClick={handleParticipate} className="participate-button">
          Participate
        </button>
      </div>
    </div>
  );
};

export default Card;
