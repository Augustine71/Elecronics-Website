import React from "react";

import { IndiviualCheckoutItem } from "./IndiviualCheckoutItem";

export const CheckoutItems = (props) => {
  return (
    <div class="col-md-4  pr0 pl5 order-details-box">
      <div class="payment-container-box sticky-contents">
        <div class="shipping-items-details-section">
          <div>
            <div class="heading prl20 open">
              {props.totalItems} Items in your Bag
            </div>
            <div class="bag-details-box-container">
              <div class="bag-details-box">
                {props.cartProducts.map((cartProduct, index) => (
                  <IndiviualCheckoutItem
                    key={index}
                    cartProduct={cartProduct}
                    cartProductIncrease={props.cartProductIncrease}
                    cartProductDecrease={props.cartProductDecrease}
                  />
                ))}
              </div>
            </div>
          </div>
          <div class="payment-details-container open">
            <div class="cart-payment-details mrl20">
              <div class="payment-details-tbl">
                <div class="name">Sub Total</div>
                <div class="value">
                  ₹<span>{props.SubTotal}</span>
                </div>
              </div>
              <div class="payment-details-tbl">
                <div class="name">Shipping Charge</div>
                <div class="value light-green">
                  <span>₹0</span>
                </div>
              </div>
              <div class="payment-details-tbl">
                <div class="name light-green">Discount</div>
                <div class="value light-green">
                  - ₹<span>{props.Discount}</span>
                </div>
              </div>
            </div>
            <div class="payment-details-tbl grand-total-cell prl20">
              <div class="name">Grand Total</div>
              <div class="value">
                ₹<span>{props.TotalPrice}</span>
              </div>
            </div>
            <div class="payment-details-tbl prl20 payment-reward-row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
