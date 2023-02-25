import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { ModalContext } from "./ModalContext";

import { PdpDesktopFeatures } from "./PdpDesktopFeatures";

export const PdpDetails = (props) => {
  const { isSmallScreen } = useContext(ModalContext);
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
      <div class="rating-section-pdp">
        <div class="rating-section__rating_container-pdp">
          <span class="rating-pdp">{props.rating}</span>
          <div className="rating-stars-pdp">
            <AiFillStar />
          </div>
        </div>
        <div class="rating-section__divider-pdp"></div>
        <span class="rating-section__review-pdp">
          {props.total_ratings} Reviewed
        </span>
      </div>
      <div className="pdp__details-partition-line"></div>
      {!isSmallScreen ? <PdpDesktopFeatures /> : ""}
      <div className="pdp__btns">
        <div className="pdp__add-to-cart">Add to Cart</div>
        <div className="pdp__buy-now">Buy Now</div>
      </div>
    </div>
  );
};
