import React from 'react';
import "./Header.css"


const HomePage = () => {
  const laboratoryName = 'MEDICINE LEAFLETS'; 

  return (
    <div className="container">
      <h1 className="title">{laboratoryName}</h1>
      <h2 className="tittle-below"> BETTER HEALTH, BETTER LIFE </h2>
    </div>
  );
};

export default HomePage;