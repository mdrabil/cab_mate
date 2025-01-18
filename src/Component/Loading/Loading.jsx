import React from 'react';
import './LoadingScreen.css'; // Import the spinner styles

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <p>Loading...</p> */}
    </div>
  );
}

export default LoadingSpinner;
