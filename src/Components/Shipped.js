import React from "react";

export const Shipped = (props) => {
  return (
    <div className="delivered__container">
      <div className="delivered__status red">PROCESSING</div>
      <div className="shipping__details-together red">
        <div>{props.address}</div>
        <div>Delivery (Processing)</div>
        <div>{props.orderDate}</div>
      </div>
    </div>
  );
};
