// import React from 'react';
// import { Link } from 'react-router-dom';

// const PoojaCard = ({ pooja }) => {
//   return (
//     <div className="pooja-card">
//       <h2>{pooja.name}</h2>
//       <p>{pooja.description}</p>
//       <Link to={`/pooja-detail/${pooja.id}`}>
//         <button>Participate</button>
//       </Link>
//     </div>
//   );
// };

// export default PoojaCard;


import React from 'react';
import { Link } from 'react-router-dom';
import './PoojaCard.css'; 

const PoojaCard = ({ pooja }) => {
  return (
    <div className="pooja-card">
      <div className="card-header">
        <img src={pooja.image} alt={pooja.name} className="card-image" />
        <div className="card-title">{pooja.title}</div>
      </div>
      <div className="card-body">
        <h2 className="pooja-name">{pooja.name}</h2>
        <p className="pooja-description">{pooja.description}</p>
        <div className="pooja-info">
          <p className="pooja-location">{pooja.location}</p>
          <p className="pooja-date">{pooja.date}</p>
        </div>
      </div>
      <div className="card-footer">
        <Link to={`/pooja-detail/${pooja.id}`}>
          <button className="participate-button">Participate</button>
        </Link>
      </div>
    </div>
  );
};

export default PoojaCard;

