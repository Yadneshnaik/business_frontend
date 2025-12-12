import React, { useState } from "react";
import "./OfferBanner.css";

const OfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="offer-banner">
      <div className="offer-content">
        <p>
          🎄 Christmas Cheer Alert! Get Up to 10% Off on All Services! 🎅  
          Limited Time Only – Don’t Miss Out!
        </p>

        <button className="close-btn" onClick={handleClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default OfferBanner;
