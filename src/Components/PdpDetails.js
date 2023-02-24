import React from "react";

export const PdpDetails = (props) => {
  return (
    <div className="pdp__product-details-section">
      <div className="pdp__product-name">{props.name}</div>
      <div className="pdp__product-price-section">
        <span class="pdp__price-section__rupee">₹</span>
        <span class="pdp__price-section__discounted_price">
          {props.discountedPrice}
        </span>
        <span class="pdp__price-section__actual_price">
          ₹{props.actualPrice}
        </span>
      </div>
      <div class="pdp__inclusive-of-taxes">MRP Inclusive of all Taxes</div>
      <div className="pdp__add-to-cart">Add to Cart</div>
    </div>
  );
};
