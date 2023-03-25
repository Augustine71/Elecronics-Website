import React from "react";

export const HomeNavigationButtons = ({ handleButtonClick, activeButton }) => {
  return (
    <div className="home__section-btn-container">
      <div className="home__section-btn-buttons">
        <button
          className={`${
            activeButton === 0 ? "active " : ""
          } home__section-btn-btn tb`}
          onClick={() => handleButtonClick(0)}
        >
          Tablets
        </button>
        <button
          className={`${
            activeButton === 1 ? "active " : ""
          } home__section-btn-btn lp`}
          onClick={() => handleButtonClick(1)}
        >
          Laptops
        </button>
        <button
          className={`${
            activeButton === 2 ? "active " : ""
          } home__section-btn-btn mb`}
          onClick={() => handleButtonClick(2)}
        >
          Mobiles
        </button>

        <button
          className={`${
            activeButton === 3 ? "active " : ""
          } home__section-btn-btn ap`}
          onClick={() => handleButtonClick(3)}
        >
          Earbuds
        </button>
      </div>
    </div>
  );
};
