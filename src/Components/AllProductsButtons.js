import React from "react";

export const AllProductsButtons = ({ handleButtonClick, activeButton }) => {
  return (
    <div class="all-products__section-btn-container">
      <div class="all-products__section-btn-buttons">
        <button
          className={`${
            activeButton === 0 ? "active " : ""
          } all-products__section-btn-btn lp`}
          onClick={() => handleButtonClick(0)}
        >
          Laptops
        </button>
        <button
          className={`${
            activeButton === 1 ? "active " : ""
          } all-products__section-btn-btn mb`}
          onClick={() => handleButtonClick(1)}
        >
          Mobiles
        </button>
        <button
          className={`${
            activeButton === 2 ? "active " : ""
          } all-products__section-btn-btn tb`}
          onClick={() => handleButtonClick(2)}
        >
          Tablets
        </button>
        <button
          className={`${
            activeButton === 3 ? "active " : ""
          } all-products__section-btn-btn ap`}
          onClick={() => handleButtonClick(3)}
        >
          Wireless Earphones
        </button>
      </div>
    </div>
  );
};
