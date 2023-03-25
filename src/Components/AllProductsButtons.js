import React from "react";

export const AllProductsButtons = ({ handleButtonClick, activeButton }) => {
  return (
    <div class="all-products__section-btn-container">
      <div class="all-products__section-btn-buttons">
        <button
          className={`${
            activeButton === "lp" ? "active " : ""
          } all-products__section-btn-btn lp`}
          onClick={() => handleButtonClick("lp")}
        >
          Laptops
        </button>
        <button
          className={`${
            activeButton === "mb" ? "active " : ""
          } all-products__section-btn-btn mb`}
          onClick={() => handleButtonClick("mb")}
        >
          Mobiles
        </button>
        <button
          className={`${
            activeButton === "tb" ? "active " : ""
          } all-products__section-btn-btn tb`}
          onClick={() => handleButtonClick("tb")}
        >
          Tablets
        </button>
        <button
          className={`${
            activeButton === "ap" ? "active " : ""
          } all-products__section-btn-btn ap`}
          onClick={() => handleButtonClick("ap")}
        >
          Earbuds
        </button>
      </div>
    </div>
  );
};
