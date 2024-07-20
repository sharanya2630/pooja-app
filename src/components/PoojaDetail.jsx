// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
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


