import React from "react";

export const Delivering = (props) => {
  return (
    <div className="delivered__container">
      <div className="delivered__status green">SHIPPED</div>
      <div className="shipping__details-together green">
        <div>Mumbai Mahim D (Maharashtra)</div>
        <div>Delivery (Shipped)</div>
        <div>{props.deliveryDate}</div>
      </div>
    </div>
  );
};
