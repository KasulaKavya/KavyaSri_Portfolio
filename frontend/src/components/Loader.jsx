import React from 'react';
import '../Loader.css';

function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="glow-spinner"></div>
      <h2>Loading...</h2>
    </div>
  );
}

export default Loader;
