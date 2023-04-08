import React from "react";
import { Link } from "react-router-dom";

export const OrderHistoryCard = ({ data }) => {
  console.log(data.cartValues);
  return (
    <div className="order__history-container">
      <div className="order__history-together">
        <div className="order__history-number">
          <div>Order Id</div>
          <div>{data.order_id}</div>
        </div>
        <div className="order__status on-hold">ON-HOLD</div>
      </div>
      <div className="order__history-items">
        {data.cartValues &&
          data.cartValues.map((item, index) => (
            <div className="order__history-item" key={index}>
              <img
                src={item.prod_img}
                className="order__history-item-img"
                loading="lazy"
              />
              <div className="order__history-item-details">
                <div className="order__history-item-name">{item.name}</div>
                <div className="order__history-item-price">
                  ₹{item.disc_price}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="order__history-details">
        <div className="order__history-header">Order Details</div>
        <div className="order__history-payment">
          <div className="order__history-category">
            <div className="order__history-subtotal">Subtotal</div>
            <div className="order__history-subtotal-amt">
              ₹{data.CartSubTotal}
            </div>
          </div>
          <div className="order__history-category">
            <div className="order__history-discount">Discount</div>
            <div className="order__history-subtotal-disamt">
              - ₹{data.CartDiscount}
            </div>
          </div>
          <div className="order__history-category">
            <div className="order__history-shipping">Shipping</div>
            <div className="order__history-subtotal-free">Free!</div>
          </div>
        </div>
        <div className="order__history-total-payment">
          <div className="order__history-total">Total</div>
          <div className="order__history-total-amt">₹{data.CartPrice}</div>
        </div>
      </div>
      <Link to="/" className="order__history-continue-btn">
        Continue Shopping
      </Link>
    </div>
  );
};
