import React from "react";

export const Delivered = (props) => {
  return (
    <div className="delivered__container">
      <div className="delivered__status">DELIVERED</div>
      <div className="shipping__details-together">
        <div>Mumbai Mahim D (Maharashtra)</div>
        <div>Delivery (Delivered)</div>
        <div>{props.deliveryDate}</div>
      </div>
    </div>
  );
};
