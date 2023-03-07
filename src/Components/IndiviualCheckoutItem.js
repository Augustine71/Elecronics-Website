import React from "react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

export const IndiviualCheckoutItem = ({
  cartProduct,
  cartProductIncrease,
  cartProductDecrease,
}) => {
  const handleCartProductIncrease = () => {
    cartProductIncrease(cartProduct);
  };

  const handleCartProductDecrease = () => {
    cartProductDecrease(cartProduct);
  };

  return (
    <div class="media item">
      <img src={cartProduct.prod_img} class="image" alt="product" />
      <div class="media-body details">
        <div class="product-name">{cartProduct.name}</div>

        <div class="product-quantity pb5">
          <div className="action-btns minus">
            <RiSubtractFill size={16} onClick={handleCartProductDecrease} />
          </div>
          <span>{cartProduct.qty}</span>
          <div className="action-btns plus">
            <RiAddFill size={16} onClick={handleCartProductIncrease} />
          </div>
        </div>
        <div class="product-qty-price">
          <div class="product-price float-right">
            <span class="actual-price">₹{cartProduct.actual_price}</span>
            <span class="selling-price">₹{cartProduct.disc_price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
